const IndividualServiceUtility = require("../IndividualServiceUtility");
const ProfileCollection = require("onf-core-model-ap/applicationPattern/onfModel/models/ProfileCollection");
const ForwardingDomain = require("onf-core-model-ap/applicationPattern/onfModel/models/ForwardingDomain");
const ForwardingConstruct = require("onf-core-model-ap/applicationPattern/onfModel/models/ForwardingConstruct");
const OperationClientInterface = require("onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/OperationClientInterface");
const eventDispatcher = require("../EventDispatcherWithResponse");
const createHttpError = require("http-errors");

describe("IndividualServiceUtility", () => {
  const getStringProfileInstanceValueMock = [
    {
      uuid: "alap-1-0-1-string-p-006",
      "profile-name": "string-profile-1-0:PROFILE_NAME_TYPE_STRING_PROFILE",
      "string-profile-1-0:string-profile-pac": {
        "string-profile-capability": {
          "string-name":
            "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive",
        },
        "string-profile-configuration": {
          "string-value": "",
        },
      },
    },
    {
      uuid: "alap-1-0-1-string-p-007",
      "profile-name": "string-profile-1-0:PROFILE_NAME_TYPE_STRING_PROFILE",
      "string-profile-1-0:string-profile-pac": {
        "string-profile-capability": {
          "string-name":
            "RequestForProvidingAcceptanceDataCausesDeterminingTheLanPortRole.OriginalLtpName",
        },
        "string-profile-configuration": {
          "string-value": "original-ltp-name",
        },
      },
    },
  ];

  describe("getStringProfileInstanceValue", () => {
    let getProfileListForProfileNameAsyncMock;

    beforeEach(() => {
      getProfileListForProfileNameAsyncMock = jest
        .spyOn(ProfileCollection, "getProfileListForProfileNameAsync")
        .mockResolvedValue(getStringProfileInstanceValueMock);
    })

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should call ProfileCollection.getProfileListForProfileNameAsync with correct parameter", async () => {
      const expectedStringName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive";

      await IndividualServiceUtility.getStringProfileInstanceValue(
        expectedStringName
      );

      expect(getProfileListForProfileNameAsyncMock).toHaveBeenCalledTimes(1);
      expect(getProfileListForProfileNameAsyncMock).toHaveBeenCalledWith(
        "string-profile-1-0:PROFILE_NAME_TYPE_STRING_PROFILE"
      );
    });

    it("should return string value of the matching string profile", async () => {
      const expectedStringName =
        "RequestForProvidingAcceptanceDataCausesDeterminingTheLanPortRole.OriginalLtpName";

      const res = await IndividualServiceUtility.getStringProfileInstanceValue(
        expectedStringName
      );

      expect(res).toBe("original-ltp-name");
    });

    it("should return empty string value of the matching string profile", async () => {
      const expectedStringName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive";

      const res = await IndividualServiceUtility.getStringProfileInstanceValue(
        expectedStringName
      );

      expect(res).toBe("");
    });

    it("should return undefined if no matching string profile found", async () => {
      const expectedStringName = "non-existing-string-name";

      const res = await IndividualServiceUtility.getStringProfileInstanceValue(
        expectedStringName
      );

      // FIXME I would expect that null or undefined will be returned
      // we cannot recongnize cases when prifile was found and is "" vs profile does not exist
      // expect(res).toBe("");
      expect(res).toBe(undefined);
    });

    it("should throw error if ProfileCollection.getProfileListForProfileNameAsync throws error", async () => {
      const expectedStringName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive";
      getProfileListForProfileNameAsyncMock.mockRejectedValue(new Error("error"));

      // FIXME InternalServerError is returned
      // expect(res).toBeInstanceOf(createHttpError.InternalServerError);
      // expect(res.message).toBe("error");
      await expect(
        IndividualServiceUtility.getStringProfileInstanceValue(
          expectedStringName
        )
      ).rejects.toThrow(new Error("error"));
    });
  });

  describe("getQueryAndPathParameter", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return object with only "path" property if "pathParamList" is not an empty array and "fields" is empty string', async () => {
      const operationName =
        "/core-model-1-4:network-control-domain=live/control-construct={mount-name}/alarms-1-0:alarm-pac/current-alarms";
      const pathParamList = ["mount-name"];
      const fields = "";

      const res = await IndividualServiceUtility.getQueryAndPathParameter(
        operationName,
        pathParamList,
        fields
      );

      expect(res).toEqual({
        path: new Map([["{mount-name}", "mount-name"]]),
      });
    });

    it('should return object with only "query" property if "pathParamList" is an empty array and "fields" is not an empty string', async () => {
      const operationName =
        "MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=original-ltp-name";
      const pathParamList = [];
      const fields = "original-ltp-name";

      const res = await IndividualServiceUtility.getQueryAndPathParameter(
        operationName,
        pathParamList,
        fields
      );

      expect(res).toEqual({
        query: { fields: "original-ltp-name" },
      });
    });

    it('should return object with "path" and "query" properties if "pathParamList" is not an empty array and "fields" is not an empty string', async () => {
      const operationName =
        "MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=original-ltp-name";
      const pathParamList = ["mount-name"];
      const fields = "original-ltp-name";

      const res = await IndividualServiceUtility.getQueryAndPathParameter(
        operationName,
        pathParamList,
        fields
      );

      expect(res).toEqual({
        path: new Map([["{mount-name}", "mount-name"]]),
        query: { fields: "original-ltp-name" },
      });
    });

    it("should throw error if an error occurs", async () => {
      // invalid operationName type, execution will fail at operationName.match()
      const operationName = 12345;
      const pathParamList = ["mount-name"];
      const fields = "original-ltp-name";

      // FIXME InternalServerError is returned
      // expect(res).toBeInstanceOf(createHttpError.InternalServerError);
      await expect(
        IndividualServiceUtility.getQueryAndPathParameter(
          operationName,
          pathParamList,
          fields
        )
      ).rejects.toThrow(new TypeError("operationName.match is not a function"));
    });
  });

  describe("getConsequentOperationClientAndFieldParams", () => {
    let getForwardingConstructForTheForwardingNameAsyncMock;
    let getOutputFcPortsAsyncMock;
    let getOperationNameAsyncMock;

    beforeEach(() => {
      getForwardingConstructForTheForwardingNameAsyncMock = jest
        .spyOn(
          ForwardingDomain,
          "getForwardingConstructForTheForwardingNameAsync"
        )
        .mockResolvedValue({
          uuid: "alap-1-0-1-op-fc-is-120",
          name: [
            {
              "value-name": "ForwardingKind",
              value:
                "core-model-1-4:FORWARDING_KIND_TYPE_INVARIANT_PROCESS_SNIPPET",
            },
            {
              "value-name": "ForwardingName",
              value:
                "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive",
            },
          ],
          "fc-port": [
            {
              "local-id": "100",
              "port-direction": "core-model-1-4:PORT_DIRECTION_TYPE_INPUT",
              "logical-termination-point": "alap-1-0-1-op-s-is-000",
            },
            {
              "local-id": "200",
              "port-direction": "core-model-1-4:PORT_DIRECTION_TYPE_OUTPUT",
              "logical-termination-point": "alap-1-0-1-op-c-is-mwdi-1-0-0-407",
            },
          ],
        });
      getOutputFcPortsAsyncMock = jest
        .spyOn(ForwardingConstruct, "getOutputFcPortsAsync")
        .mockResolvedValue([
          {
            "local-id": "200",
            "port-direction": "core-model-1-4:PORT_DIRECTION_TYPE_OUTPUT",
            "logical-termination-point": "alap-1-0-1-op-c-is-mwdi-1-0-0-407",
          },
        ]);
      getOperationNameAsyncMock = jest
        .spyOn(OperationClientInterface, "getOperationNameAsync")
        .mockResolvedValue(
          "/core-model-1-4:network-control-domain=live/control-construct={mount-name}/alarms-1-0:alarm-pac/current-alarms"
        );
      jest
        .spyOn(ProfileCollection, "getProfileListForProfileNameAsync")
        .mockResolvedValue(getStringProfileInstanceValueMock);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should call ForwardingDomain.getForwardingConstructForTheForwardingNameAsync with correct parameter", () => {
      const forwardingConstructName =
        // {mount-name} device1
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive";
      const stringName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive";

      IndividualServiceUtility.getConsequentOperationClientAndFieldParams(
        forwardingConstructName,
        stringName
      );

      expect(
        getForwardingConstructForTheForwardingNameAsyncMock
      ).toHaveBeenCalledTimes(1);
      expect(
        getForwardingConstructForTheForwardingNameAsyncMock
      ).toHaveBeenCalledWith(forwardingConstructName);
    });

    it("should call ForwardingConstruct.getOutputFcPortsAsync with correct parameter", async () => {
      const forwardingConstructName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive";
      const stringName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive";

      await IndividualServiceUtility.getConsequentOperationClientAndFieldParams(
        forwardingConstructName,
        stringName
      );

      expect(getOutputFcPortsAsyncMock).toHaveBeenCalledTimes(1);
      expect(getOutputFcPortsAsyncMock).toHaveBeenCalledWith(
        "alap-1-0-1-op-fc-is-120"
      );
    });

    it("should call OperationClientInterface.getOperationNameAsync with correct parameter", async () => {
      const forwardingConstructName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive";
      const stringName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive";

      await IndividualServiceUtility.getConsequentOperationClientAndFieldParams(
        forwardingConstructName,
        stringName
      );

      expect(getOperationNameAsyncMock).toHaveBeenCalledTimes(1);
      expect(getOperationNameAsyncMock).toHaveBeenCalledWith(
        "alap-1-0-1-op-c-is-mwdi-1-0-0-407"
      );
    });

    it("should return valid response", async () => {
      const forwardingConstructName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive";
      const stringName =
        "RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive.AlarmsFromLive";

      const res =
        await IndividualServiceUtility.getConsequentOperationClientAndFieldParams(
          forwardingConstructName,
          stringName
        );

      expect(res).toEqual({
        operationClientUuid: "alap-1-0-1-op-c-is-mwdi-1-0-0-407",
        operationName:
          "/core-model-1-4:network-control-domain=live/control-construct={mount-name}/alarms-1-0:alarm-pac/current-alarms",
        fields: "",
      });
    });

    it("should throw error if ForwardingDomain.getForwardingConstructForTheForwardingNameAsync returns rejected Promise", async () => {
      getForwardingConstructForTheForwardingNameAsyncMock.mockRejectedValue(
        new Error("error")
      );

      // FIXME InternalServerError is returned
      // expect(res).toBeInstanceOf(createHttpError.InternalServerError);
      await expect(
        IndividualServiceUtility.getConsequentOperationClientAndFieldParams(
          "non-existing-forwarding-construct-name"
        )
      ).rejects.toThrow(new Error("error"));
    });
  });

  describe("forwardRequest", () => {
    let dispatchEventMock;

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should call eventDispatcher.dispatchEvent with correct parameters", async () => {
      const operationClientAndFieldParams = {
        operationClientUuid: "alap-1-0-1-op-c-is-mwdi-1-0-0-407",
        operationName:
          "/core-model-1-4:network-control-domain=live/control-construct={mount-name}/alarms-1-0:alarm-pac/current-alarms",
        fields: "",
      };
      const pathParamList = ["mount-name"];
      const requestHeaders = {
        user: "user",
        xCorrelator: "xCorrelator",
        traceIndicator: "traceIndicator",
        customerJourney: "customerJourney",
      };
      const traceIndicatorIncrementer = 1;
      dispatchEventMock = jest
        .spyOn(eventDispatcher, "dispatchEvent")
        .mockResolvedValue({});

      await IndividualServiceUtility.forwardRequest(
        operationClientAndFieldParams,
        pathParamList,
        requestHeaders,
        traceIndicatorIncrementer
      );

      expect(dispatchEventMock).toHaveBeenCalledTimes(1);
      expect(dispatchEventMock).toHaveBeenCalledWith(
        "alap-1-0-1-op-c-is-mwdi-1-0-0-407",
        {},
        "user",
        "xCorrelator",
        "traceIndicator.1",
        "customerJourney",
        "GET",
        { path: new Map([["{mount-name}", "mount-name"]]) }
      );
    });

    it("should throw error if eventDispatcher.dispatchEvent throws an error other than HttpError", async () => {
      const operationClientAndFieldParams = {
        operationClientUuid: "alap-1-0-1-op-c-is-mwdi-1-0-0-407",
        operationName:
          "/core-model-1-4:network-control-domain=live/control-construct={mount-name}/alarms-1-0:alarm-pac/current-alarms",
        fields: "",
      };
      const pathParamList = ["mount-name"];
      const requestHeaders = {
        user: "user",
        xCorrelator: "xCorrelator",
        traceIndicator: "traceIndicator",
        customerJourney: "customerJourney",
      };
      const traceIndicatorIncrementer = 1;
      dispatchEventMock = jest
        .spyOn(eventDispatcher, "dispatchEvent")
        .mockRejectedValue(new Error("error"));

      // FIXME InternalServerError is returned
      // expect(res).toBeInstanceOf(createHttpError.InternalServerError);
      await expect(
        IndividualServiceUtility.forwardRequest(
          operationClientAndFieldParams,
          pathParamList,
          requestHeaders,
          traceIndicatorIncrementer
        )
      ).rejects.toThrow(new Error("error"));
    });

    it("should throw HttpError if eventDispatcher.dispatchEvent throws HttpError", async () => {
      const operationClientAndFieldParams = {
        operationClientUuid: "alap-1-0-1-op-c-is-mwdi-1-0-0-407",
        operationName:
          "/core-model-1-4:network-control-domain=live/control-construct={mount-name}/alarms-1-0:alarm-pac/current-alarms",
        fields: "",
      };
      const pathParamList = ["mount-name"];
      const requestHeaders = {
        user: "user",
        xCorrelator: "xCorrelator",
        traceIndicator: "traceIndicator",
        customerJourney: "customerJourney",
      };
      const traceIndicatorIncrementer = 1;
      dispatchEventMock = jest
        .spyOn(eventDispatcher, "dispatchEvent")
        .mockRejectedValue(new createHttpError.BadGateway());

      // FIXME InternalServerError is returned
      // expect(res).toBeInstanceOf(createHttpError.InternalServerError);
      await expect(
        IndividualServiceUtility.forwardRequest(
          operationClientAndFieldParams,
          pathParamList,
          requestHeaders,
          traceIndicatorIncrementer
        )
      ).rejects.toThrow(new createHttpError.BadGateway());
    });
  });
});
