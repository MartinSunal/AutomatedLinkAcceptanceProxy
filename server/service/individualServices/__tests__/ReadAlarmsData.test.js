const ReadAlarmsData = require("../ReadAlarmsData");
const IndividualServiceUtility = require("../IndividualServiceUtility");

const consequentOperationCliendAndFieldParamsMock = {
  operationClientUuid: "alap-1-0-1-op-c-is-mwdi-1-0-0-407",
  operationName:
    "/core-model-1-4:network-control-domain=live/control-construct={mount-name}/alarms-1-0:alarm-pac/current-alarms",
  fields: "",
};

const alarmsFromLiveMock = {
  "alarms-1-0:current-alarms": {
    "current-alarm-list": [
      {
        "current-alarm-identifier": "000-000-5-1",
        "alarm-type-id": "alarms-1-0:ALARM_TYPE_ID_TYPE_IFPORT_OBJ",
        "alarm-type-qualifier": "MW_LIM",
        resource:
          "/core-model-1-4:control-construct/logical-termination-point[uuid='LTP-MWPS-TTP-5-1']",
        "alarm-severity": "alarms-1-0:SEVERITY_TYPE_MAJOR",
        timestamp: "2024-05-12T14:50:12+00:00",
      },
      {
        "current-alarm-identifier": "11111-111-5-1",
        "alarm-type-id": "alarms-1-0:ALARM_TYPE_ID_TYPE_IFPORT_OBJ",
        "alarm-type-qualifier": "MW_CFG_MISMATCH",
        resource:
          "/core-model-1-4:control-construct/logical-termination-point[uuid='LTP-MWPS-TTP-5-1']",
        "alarm-severity": "alarms-1-0:SEVERITY_TYPE_CRITICAL",
        timestamp: "2024-05-12T14:50:57+00:00",
      },
    ],
    "time-of-latest-change": "2024-05-12T14:50:57+00:00",
    "number-of-current-alarms": 2,
  },
};

const expectedFormattedAlarms = {
  alarms: {
    "current-alarms": {
      "number-of-current-alarms": 2,
      "current-alarm-list": [
        {
          "alarm-type-id": "alarms-1-0:ALARM_TYPE_ID_TYPE_IFPORT_OBJ",
          "alarm-type-qualifier": "MW_LIM",
          "alarm-severity": "alarms-1-0:SEVERITY_TYPE_MAJOR",
        },
        {
          "alarm-type-id": "alarms-1-0:ALARM_TYPE_ID_TYPE_IFPORT_OBJ",
          "alarm-type-qualifier": "MW_CFG_MISMATCH",
          "alarm-severity": "alarms-1-0:SEVERITY_TYPE_CRITICAL",
        },
      ],
    },
  },
  traceIndicatorIncrementer: 2,
};

const mountName = "mount-name";
const headers = {
  user: "user",
  originator: "originator",
  xCorrelator: "xCorrelator",
  traceIndicator: "traceIndicator",
  customerJourney: "customerJourney",
};
const traceIndicatorIncrementer = 1;

describe("ReadAlarmsData", () => {
  describe("readAlarmsData", () => {
    let forwardRequestMock;

    beforeEach(() => {
      getConsequentOperationClientAndFieldParamsMock = jest
        .spyOn(
          IndividualServiceUtility,
          "getConsequentOperationClientAndFieldParams"
        )
        .mockResolvedValue(consequentOperationCliendAndFieldParamsMock);
      forwardRequestMock = jest
        .spyOn(IndividualServiceUtility, "forwardRequest")
        .mockResolvedValue(alarmsFromLiveMock);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should call IndividualServiceUtility.getConsequentconsequentOperationCliendAndFieldParamsMockOperationClientAndFieldParams with correct parameters", async () => {
      await ReadAlarmsData.readAlarmsData(
        mountName,
        headers,
        traceIndicatorIncrementer
      );

      expect(
        getConsequentOperationClientAndFieldParamsMock
      ).toHaveBeenCalledTimes(1);
      expect(
        getConsequentOperationClientAndFieldParamsMock
      ).toHaveBeenCalledWith(
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive",
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive"
      );
    });

    it("should call IndividualServiceUtility.forwardRequest with correct parameters", async () => {
      await ReadAlarmsData.readAlarmsData(
        mountName,
        headers,
        traceIndicatorIncrementer
      );

      expect(forwardRequestMock).toHaveBeenCalledTimes(1);
      expect(forwardRequestMock).toHaveBeenCalledWith(
        consequentOperationCliendAndFieldParamsMock, // response from getConsequentOperationClientAndFieldParams
        [mountName],
        headers,
        1 // traceIndicatorIncrementer
      );
    });

    it("should return formatted alarms data", async () => {
      const res = await ReadAlarmsData.readAlarmsData(
        mountName,
        headers,
        traceIndicatorIncrementer
      );

      expect(res).toEqual(expectedFormattedAlarms);
    });

    it("should throw error if IndividualServiceUtility.getConsequentOperationClientAndFieldParams throws an error", async () => {
      getConsequentOperationClientAndFieldParamsMock = jest
        .spyOn(
          IndividualServiceUtility,
          "getConsequentOperationClientAndFieldParams"
        )
        .mockRejectedValue(new Error("error"));

      // FIXME res is returned
      // expect(res).toEqual({ alarms: {}, traceIndicatorIncrementer: 1 });
      await expect(
        ReadAlarmsData.readAlarmsData(
          mountName,
          headers,
          traceIndicatorIncrementer
        )
      ).rejects.toThrow(new Error("error"));
    });

    it("should not call IndividualServiceUtility.forwardRequest if IndividualServiceUtility.getConsequentOperationClientAndFieldParams throws an error", async () => {
      getConsequentOperationClientAndFieldParamsMock = jest
        .spyOn(
          IndividualServiceUtility,
          "getConsequentOperationClientAndFieldParams"
        )
        .mockRejectedValue(new Error("error"));

      await ReadAlarmsData.readAlarmsData(
        mountName,
        headers,
        traceIndicatorIncrementer
      );

      expect(forwardRequestMock).not.toHaveBeenCalled();
    });

    it("should throw error if IndividualServiceUtility.forwardRequest throws an error", async () => {
      forwardRequestMock = jest
        .spyOn(IndividualServiceUtility, "forwardRequest")
        .mockRejectedValue(new Error("error"));

      // FIXME res is returned
      // expect(res).toEqual({ alarms: undefined, traceIndicatorIncrementer: 2 });
      await expect(
        ReadAlarmsData.readAlarmsData(
          mountName,
          headers,
          traceIndicatorIncrementer
        )
      ).rejects.toThrow(new Error("error"));
    });

    it("should return empty alarms data and incremented traceIndicatorIncrementer if IndividualServiceUtility.forwardRequest returns empty object", async () => {
      forwardRequestMock = jest
        .spyOn(IndividualServiceUtility, "forwardRequest")
        .mockResolvedValue({});

      const res = await ReadAlarmsData.readAlarmsData(
        mountName,
        headers,
        traceIndicatorIncrementer
      );

      expect(res).toEqual({ alarms: {}, traceIndicatorIncrementer: 2 });
    });

    it("should return empty alarms data and incremented traceIndicatorIncrementer if IndividualServiceUtility.forwardRequest returns undefined response", async () => {
      forwardRequestMock = jest
        .spyOn(IndividualServiceUtility, "forwardRequest")
        .mockResolvedValue(undefined);

      const res = await ReadAlarmsData.readAlarmsData(
        mountName,
        headers,
        traceIndicatorIncrementer
      );

      expect(res).toEqual({ alarms: {}, traceIndicatorIncrementer: 2 });
    });
  });
});
