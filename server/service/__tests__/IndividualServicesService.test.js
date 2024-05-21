/**
 * mock ReadLtpStructure.readLtpStructure
 * RequestForProvidingAcceptanceDataCausesReadingLtpStructure
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}?fields=logical-termination-point(uuid;server-ltp;client-ltp;layer-protocol(local-id;layer-protocol-name))
 */
const mockReadLtpStructureResult = {
  ltpStructure: {
    "core-model-1-4:control-construct": [
      {
        uuid: "string",
        "alarms-1-0:alarm-pac": {
          "alarm-capability": {},
          "alarm-configuration": {},
          "current-alarms": {},
          "alarm-event-records": {},
        },
        equipment: [
          {
            uuid: "string",
            connector: [
              {
                "local-id": "string",
              },
            ],
            "contained-holder": [
              {
                "local-id": "string",
              },
            ],
            "expected-equipment": [
              {
                "local-id": "string",
              },
            ],
            "actual-equipment": {},
          },
        ],
        "firmware-1-0:firmware-collection": {
          "firmware-component-list": [
            {
              "local-id": "string",
              "firmware-component-pac": {
                "firmware-component-capability": {},
                "firmware-component-status": {},
              },
            },
          ],
        },
        "profile-collection": {
          profile: [
            {
              uuid: "string",
              "profile-name":
                "co-channel-profile-1-0:PROFILE_NAME_TYPE_CO_CHANNEL_PROFILE",
              "co-channel-profile-1-0:co-channel-profile-pac": {
                "co-channel-profile-capability": {},
                "co-channel-profile-configuration": {},
              },
            },
            {
              uuid: "string",
              "profile-name":
                "policing-profile-1-0:PROFILE_NAME_TYPE_POLICING_PROFILE",
              "policing-profile-1-0:policing-profile-pac": {
                "policing-profile-capability": {},
                "policing-profile-configuration": {},
              },
            },
            {
              uuid: "string",
              "profile-name": "qos-profile-1-0:PROFILE_NAME_TYPE_QOS_PROFILE",
              "qos-profile-1-0:qos-profile-pac": {
                "qos-profile-capability": {},
                "qos-profile-configuration": {},
              },
            },
            {
              uuid: "string",
              "profile-name":
                "scheduler-profile-1-0:PROFILE_NAME_TYPE_SCHEDULER_PROFILE",
              "scheduler-profile-1-0:scheduler-profile-pac": {
                "scheduler-profile-capability": {},
                "scheduler-profile-configuration": {},
              },
            },
            {
              uuid: "string",
              "profile-name": "wred-profile-1-0:PROFILE_NAME_TYPE_WRED_PROFILE",
              "wred-profile-1-0:wred-profile-pac": {
                "wred-profile-capability": {},
                "wred-profile-configuration": {},
              },
            },
          ],
        },
        "forwarding-domain": [
          {
            uuid: "string",
            fc: [
              {
                uuid: "string",
                "fc-port": [
                  {
                    "local-id": "string",
                  },
                ],
              },
            ],
          },
        ],
        "logical-termination-point": [
          {
            uuid: "string",
            "ltp-augment-1-0:ltp-augment-pac": {},
            "embedded-clock": [{}],
            "layer-protocol": [
              {
                "local-id": "string",
                "layer-protocol-name":
                  "air-interface-2-0:LAYER_PROTOCOL_NAME_TYPE_AIR_LAYER",
                "air-interface-2-0:air-interface-pac": {
                  "air-interface-capability": {},
                  "air-interface-configuration": {},
                  "air-interface-status": {},
                  "air-interface-historical-performances": {},
                },
              },
              {
                "local-id": "string",
                "layer-protocol-name":
                  "ethernet-container-2-0:LAYER_PROTOCOL_NAME_TYPE_ETHERNET_CONTAINER_LAYER",
                "ethernet-container-2-0:ethernet-container-pac": {
                  "ethernet-container-capability": {},
                  "ethernet-container-configuration": {},
                  "ethernet-container-status": {},
                  "ethernet-container-historical-performances": {},
                },
              },
              {
                "local-id": "string",
                "layer-protocol-name":
                  "hybrid-mw-structure-2-0:LAYER_PROTOCOL_NAME_TYPE_HYBRID_MW_STRUCTURE_LAYER",
                "hybrid-mw-structure-2-0:hybrid-mw-structure-pac": {
                  "hybrid-mw-structure-capability": {},
                  "hybrid-mw-structure-configuration": {},
                  "hybrid-mw-structure-status": {},
                  "hybrid-mw-structure-historical-performances": {},
                },
              },
              {
                "local-id": "string",
                "layer-protocol-name":
                  "mac-interface-1-0:LAYER_PROTOCOL_NAME_TYPE_MAC_LAYER",
                "mac-interface-1-0:mac-interface-pac": {
                  "mac-interface-capability": {},
                  "mac-interface-configuration": {},
                  "mac-interface-status": {},
                },
              },
              {
                "local-id": "string",
                "layer-protocol-name":
                  "pure-ethernet-structure-2-0:LAYER_PROTOCOL_NAME_TYPE_PURE_ETHERNET_STRUCTURE_LAYER",
                "pure-ethernet-structure-2-0:pure-ethernet-structure-pac": {
                  "pure-ethernet-structure-capability": {},
                  "pure-ethernet-structure-configuration": {},
                  "pure-ethernet-structure-status": {},
                  "pure-ethernet-structure-historical-performances": {},
                },
              },
              {
                "local-id": "string",
                "layer-protocol-name":
                  "vlan-interface-1-0:LAYER_PROTOCOL_NAME_TYPE_VLAN_LAYER",
                "vlan-interface-1-0:vlan-interface-pac": {
                  "vlan-interface-capability": {},
                  "vlan-interface-configuration": {},
                },
              },
              {
                "local-id": "string",
                "layer-protocol-name":
                  "wire-interface-2-0:LAYER_PROTOCOL_NAME_TYPE_WIRE_LAYER",
                "wire-interface-2-0:wire-interface-pac": {
                  "wire-interface-capability": {},
                  "wire-interface-configuration": {},
                  "wire-interface-status": {},
                  "wire-interface-historical-performances": {},
                },
              },
              {
                "local-id": "string",
                "layer-protocol-name":
                  "ip-interface-1-0:LAYER_PROTOCOL_NAME_TYPE_IP_LAYER",
                "ip-interface-1-0:ip-interface-pac": {
                  "ip-interface-capability": {},
                  "ip-interface-configuration": {},
                  "ip-interface-status": {},
                },
              },
              {
                "local-id": "string",
                "layer-protocol-name":
                  "tdm-container-2-0:LAYER_PROTOCOL_NAME_TYPE_TDM_CONTAINER_LAYER",
                "tdm-container-2-0:tdm-container-pac": {
                  "tdm-container-capability": {},
                  "tdm-container-configuration": {},
                  "tdm-container-status": {},
                },
              },
            ],
          },
        ],
      },
    ],
  },
  traceIndicatorIncrementer: 2,
};

/**
 * mock ReadAirInterfaceData.readAirInterfaceData
 * RequestForProvidingAcceptanceDataCausesDeterminingAirInterfaceUuidUnderTest
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=external-label
 * {
 *   "ltp-augment-1-0:ltp-augment-pac": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesReadingConfigurationFromCache
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/air-interface-2-0:air-interface-pac/air-interface-configuration
 * {
 *    "air-interface-2-0:air-interface-configuration": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesReadingCapabilitiesFromCache
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/air-interface-2-0:air-interface-pac/air-interface-capability
 * {
 *    "air-interface-2-0:air-interface-capability": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesReadingDedicatedStatusValuesFromLive
 * MWDI://core-model-1-4:network-control-domain=live/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/air-interface-2-0:air-interface-pac/air-interface-status?fields=tx-level-cur;rx-level-cur;transmission-mode-cur;xpd-cur;snir-cur
 * {
 *    "air-interface-2-0:air-interface-status": {}
 * }
 */
const mockReadAirInterfaceResult = {
  uuidUnderTest: "",
  airInterface: {},
  traceIndicatorIncrementer: 3,
};

/**
 * mock ReadVlanInterfaceData.readVlanInterfaceData
 * RequestForProvidingAcceptanceDataCausesDeterminingTheLanPortRole.OriginalLtpName
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=original-ltp-name
 * {
 *    "ltp-augment-1-0:ltp-augment-pac": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesDeterminingTheLanPortRole.VlanInterfaceKind
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/vlan-interface-1-0:vlan-interface-pac/vlan-interface-configuration?fields=interface-kind
 * {
 *    "vlan-interface-1-0:vlan-interface-configuration": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesDeterminingTheLanPortRole.EthernetContainerStatus
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/ethernet-container-2-0:ethernet-container-pac/ethernet-container-status?fields=interface-status
 * {
 *    "ethernet-container-2-0:ethernet-container-status": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesDeterminingTheWanPortRole.OriginalLtpName
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=original-ltp-name
 * {
 *    "ltp-augment-1-0:ltp-augment-pac": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesDeterminingTheWanPortRole.VlanInterfaceKind
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/vlan-interface-1-0:vlan-interface-pac/vlan-interface-configuration?fields=interface-kind
 * {
 *    "vlan-interface-1-0:vlan-interface-configuration": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesDeterminingTheWanPortRole.EthernetContainerStatus
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/ethernet-container-2-0:ethernet-container-pac/ethernet-container-status?fields=interface-status
 * {
 *    "ethernet-container-2-0:ethernet-container-status": {}
 * }
 */
const mockReadVlanInterfaceResult = {
  vlanInterface: {
    configuredLanPortRoleList: [],
    configuredWanPortRoleList: [],
  },
  traceIndicatorIncrementer: 4,
};

/**
 * mock ReadInventoryData.readInventoryData
 * RequestForProvidingAcceptanceDataCausesReadingFirmwareList
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/firmware-1-0:firmware-collection
 * {
 * "firmware-1-0:firmware-collection": {
 *   "firmware-component-list": [
 *     {
 *       "local-id": "string",
 *       "firmware-component-pac": {
 *         "firmware-component-capability": {},
 *         "firmware-component-status": {}
 *       }
 *     }
 *   ]
 * }
 *}
 * RequestForProvidingAcceptanceDataCausesDeterminingTheModemPosition.EquipmentUuid
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=equipment
 * {
 *   "ltp-augment-1-0:ltp-augment-pac": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesReadingTheRadioComponentIdentifiers
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/equipment={uuid}/actual-equipment?fields=structure(category);manufactured-thing(equipment-type(type-name;part-type-identifier);equipment-instance(serial-number))
 * {
 *   "core-model-1-4:actual-equipment": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesDeterminingTheModemPosition.EquipmentCategory
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/equipment={uuid}/actual-equipment?fields=structure(category)
 * {
 *   "core-model-1-4:actual-equipment": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesDeterminingTheModemPosition.HolderLabel
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}?fields=equipment(contained-holder(occupying-fru;equipment-augment-1-0:holder-pac(vendor-label)))
 * general /control-construct={mount-name} response with only certain fields?
 *
 * RequestForProvidingAcceptanceDataCausesAnalysingTheAggregation
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=original-ltp-name;external-label
 * {
 *   "ltp-augment-1-0:ltp-augment-pac": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesRetrievingSfpInformation.EquipmentUuid
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=equipment
 * {
 *   "ltp-augment-1-0:ltp-augment-pac": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesRetrievingSfpInformation.WireInterfaceName
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=original-ltp-name
 * {
 *   "ltp-augment-1-0:ltp-augment-pac": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesRetrievingSfpInformation.SupportedPmds
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/wire-interface-2-0:wire-interface-pac/wire-interface-capability?fields=supported-pmd-kind-list(pmd-name)
 * {
 *   "wire-interface-2-0:wire-interface-capability": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesRetrievingSfpInformation.OperatedPmd
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/layer-protocol={local-id}/wire-interface-2-0:wire-interface-pac/wire-interface-status?fields=pmd-kind-cur
 * {
 *   "wire-interface-2-0:wire-interface-status": {}
 * }
 *
 * RequestForProvidingAcceptanceDataCausesDeterminingTheOduConnector.ConnectorId
 * MWDI://core-model-1-4:network-control-domain=cache/control-construct={mount-name}/logical-termination-point={uuid}/ltp-augment-1-0:ltp-augment-pac?fields=equipment;connector
 * {
 *   "ltp-augment-1-0:ltp-augment-pac": {}
 * }
 */
const mockReadInventoryResult = {
  inventory: {},
  traceIndicatorIncrementer: 5,
};

/**
 * mock ReadAlarmsData.readAlarmsData
 * RequestForProvidingAcceptanceDataCausesReadingCurrentAlarmsFromLive
 * MWDI://core-model-1-4:network-control-domain=live/control-construct={mount-name}/alarms-1-0:alarm-pac/current-alarms
 * {
 *   "alarms-1-0:current-alarms": {}
 * }
 */
const mockReadAlarmsResult = {
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
  traceIndicatorIncrementer: 6,
};

const expectedResult = {
  "vlan-interface": {
    "configured-lan-port-role-list": [],
    "configured-wan-port-role-list": [],
  },
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
};

const body = {
  "mount-name": "mount-name",
  "link-id": "link-id",
};
const user = "user";
const originator = "originator";
const xCorrelator = "xCorrelator";
const traceIndicator = "traceIndicator";
const customerJourney = "customerJourney";

const IndividualServicesService = require("../IndividualServicesService");
const ReadLtpStructure = require("../individualServices/ReadLtpStructure");
const ReadAirInterfaceData = require("../individualServices/ReadAirInterfaceData");
const ReadVlanInterfaceData = require("../individualServices/ReadVlanInterfaceData");
const ReadInventoryData = require("../individualServices/ReadInventoryData");
const ReadAlarmsData = require("../individualServices/ReadAlarmsData");

describe("IndividialServicesService", () => {
  describe("provideAcceptanceDataOfLinkEndpoint", () => {
    let ReadLtpStructureMock;
    let ReadAirInterfaceDataMock;
    let ReadVlanInterfaceDataMock;
    let ReadInventoryDataMock;
    let ReadAlarmsDataMock;

    beforeEach(() => {
      ReadLtpStructureMock = jest
        .spyOn(ReadLtpStructure, "readLtpStructure")
        .mockResolvedValue(mockReadLtpStructureResult);
      ReadAirInterfaceDataMock = jest
        .spyOn(ReadAirInterfaceData, "readAirInterfaceData")
        .mockResolvedValue(mockReadAirInterfaceResult);
      ReadVlanInterfaceDataMock = jest
        .spyOn(ReadVlanInterfaceData, "readVlanInterfaceData")
        .mockResolvedValue(mockReadVlanInterfaceResult);
      ReadInventoryDataMock = jest
        .spyOn(ReadInventoryData, "readInventoryData")
        .mockResolvedValue(mockReadInventoryResult);
      ReadAlarmsDataMock = jest
        .spyOn(ReadAlarmsData, "readAlarmsData")
        .mockResolvedValue(mockReadAlarmsResult);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should call ReadLtpStructure.readLtpStructure with correct parameters", async () => {
      await IndividualServicesService.provideAcceptanceDataOfLinkEndpoint(
        body,
        user,
        originator,
        xCorrelator,
        traceIndicator,
        customerJourney
      );

      expect(ReadLtpStructureMock).toHaveBeenCalledTimes(1);
      expect(ReadLtpStructureMock).toHaveBeenCalledWith(
        body["mount-name"],
        { user, originator, xCorrelator, traceIndicator, customerJourney },
        1
      );
    });

    it("should call ReadAirInterfaceData.readAirInterfaceData with correct parameters", async () => {
      await IndividualServicesService.provideAcceptanceDataOfLinkEndpoint(
        body,
        user,
        originator,
        xCorrelator,
        traceIndicator,
        customerJourney
      );

      expect(ReadAirInterfaceDataMock).toHaveBeenCalledTimes(1);
      expect(ReadAirInterfaceDataMock).toHaveBeenCalledWith(
        body["mount-name"],
        body["link-id"],
        mockReadLtpStructureResult.ltpStructure,
        { user, originator, xCorrelator, traceIndicator, customerJourney },
        2
      );
    });

    it("should call ReadVlanInterfaceData.readVlanInterfaceData with correct parameters", async () => {
      await IndividualServicesService.provideAcceptanceDataOfLinkEndpoint(
        body,
        user,
        originator,
        xCorrelator,
        traceIndicator,
        customerJourney
      );

      expect(ReadVlanInterfaceDataMock).toHaveBeenCalledTimes(1);
      expect(ReadVlanInterfaceDataMock).toHaveBeenCalledWith(
        body["mount-name"],
        mockReadLtpStructureResult.ltpStructure,
        { user, originator, xCorrelator, traceIndicator, customerJourney },
        3
      );
    });

    it("should call ReadInventoryData.readInventoryData with correct parameters", async () => {
      await IndividualServicesService.provideAcceptanceDataOfLinkEndpoint(
        body,
        user,
        originator,
        xCorrelator,
        traceIndicator,
        customerJourney
      );

      expect(ReadInventoryDataMock).toHaveBeenCalledTimes(1);
      expect(ReadInventoryDataMock).toHaveBeenCalledWith(
        body["mount-name"],
        mockReadLtpStructureResult.ltpStructure,
        mockReadAirInterfaceResult.uuidUnderTest,
        { user, originator, xCorrelator, traceIndicator, customerJourney },
        4
      );
    });

    it("should call ReadAlarmsData.readAlarmsData with correct parameters", async () => {
      await IndividualServicesService.provideAcceptanceDataOfLinkEndpoint(
        body,
        user,
        originator,
        xCorrelator,
        traceIndicator,
        customerJourney
      );

      expect(ReadAlarmsDataMock).toHaveBeenCalledTimes(1);
      expect(ReadAlarmsDataMock).toHaveBeenCalledWith(
        body["mount-name"],
        { user, originator, xCorrelator, traceIndicator, customerJourney },
        5
      );
    });

    it("should return acceptance data of link endpoint", async () => {
      const res =
        await IndividualServicesService.provideAcceptanceDataOfLinkEndpoint(
          body,
          user,
          originator,
          xCorrelator,
          traceIndicator,
          customerJourney
        );

      expect(res).toEqual(expectedResult);
    });

    it("should throw error if ReadLtpStructure.readLtpStructure throws error", async () => {
      ReadLtpStructureMock.mockRejectedValue(new Error("error"));

      await expect(
        IndividualServicesService.provideAcceptanceDataOfLinkEndpoint(
          body,
          user,
          originator,
          xCorrelator,
          traceIndicator,
          customerJourney
        )
      ).rejects.toThrow("error");

      expect(ReadAirInterfaceDataMock).not.toHaveBeenCalled();
      expect(ReadVlanInterfaceDataMock).not.toHaveBeenCalled();
      expect(ReadInventoryDataMock).not.toHaveBeenCalled();
      expect(ReadAlarmsDataMock).not.toHaveBeenCalled();
    });

    it("should throw error if ReadAlarmsData.readAlarmsData throws error", async () => {
      ReadAlarmsDataMock.mockRejectedValue(new Error("error"));

      await expect(
        IndividualServicesService.provideAcceptanceDataOfLinkEndpoint(
          body,
          user,
          originator,
          xCorrelator,
          traceIndicator,
          customerJourney
        )
      ).rejects.toThrow(new Error("error"));

      // even if ReadAlarmsData.readAlarmsData throws error, IndividualServicesService will only log the error and continue with the execution
      // it is therefore inherently impossible to know if alarms are empty because no alarms exist or because of an error in the service
      // because of this, the end result will be the same as if there were no alarms data
      // Received promise resolved instead of rejected
      // Resolved to value: {"vlan-interface": {"configured-lan-port-role-list": [], "configured-wan-port-role-list": []}}
    });
  });
});
