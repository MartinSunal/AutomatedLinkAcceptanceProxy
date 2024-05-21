const eventDispatcher = require("../EventDispatcherWithResponse");
const OperationClientInterface = require("onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/OperationClientInterface");
const LogicalTerminationPoint = require("onf-core-model-ap/applicationPattern/onfModel/models/LogicalTerminationPoint");
const HttpClientInterface = require("onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/HttpClientInterface");
const HttpServerInterface = require("onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/HttpServerInterface");
const RequestHeader = require("onf-core-model-ap/applicationPattern/rest/client/RequestHeader");
const RestRequestBuilder = require("onf-core-model-ap/applicationPattern/rest/client/RequestBuilder");
const ExecutionAndTraceService = require("onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService");
const OnfAttributeFormatter = require("onf-core-model-ap/applicationPattern/onfModel/utility/OnfAttributeFormatter");
const createHttpError = require("http-errors");

describe("EventDispatcherWithResponse", () => {
  describe("dispatchEvent", () => {
    let getOperationKeyAsyncMock;
    let getOperationNameAsyncMock;
    let getServerLtpListAsyncMock;
    let getApplicationNameAsyncClientMock;
    let getReleaseNumberAsyncMock;
    let getApplicationNameAsyncServerMock;
    let modifyJsonObjectKeysToKebabCaseMock;
    let buildAndTriggerRestRequestMock;
    let recordServiceRequestFromClientMock;

    beforeEach(() => {
      getOperationKeyAsyncMock = jest
        .spyOn(OperationClientInterface, "getOperationKeyAsync")
        .mockResolvedValue("operation-key");
      getOperationNameAsyncMock = jest
        .spyOn(OperationClientInterface, "getOperationNameAsync")
        .mockResolvedValue("operation-name");
      getServerLtpListAsyncMock = jest
        .spyOn(LogicalTerminationPoint, "getServerLtpListAsync")
        .mockResolvedValue(["http-client-uuid"]);
      getApplicationNameAsyncClientMock = jest
        .spyOn(HttpClientInterface, "getApplicationNameAsync")
        .mockResolvedValue("server-application-name");
      getReleaseNumberAsyncMock = jest
        .spyOn(HttpClientInterface, "getReleaseNumberAsync")
        .mockResolvedValue("server-application-release-number");
      getApplicationNameAsyncServerMock = jest
        .spyOn(HttpServerInterface, "getApplicationNameAsync")
        .mockResolvedValue("originator");
      modifyJsonObjectKeysToKebabCaseMock = jest
        .spyOn(OnfAttributeFormatter, "modifyJsonObjectKeysToKebabCase")
        .mockImplementation((obj) => obj);
      buildAndTriggerRestRequestMock = jest
        .spyOn(RestRequestBuilder, "BuildAndTriggerRestRequest")
        .mockResolvedValue({ status: 200, data: { response: "data" } });
      recordServiceRequestFromClientMock = jest
        .spyOn(ExecutionAndTraceService, "recordServiceRequestFromClient")
        .mockResolvedValue();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should call OperationClientInterface.getOperationKeyAsync with correct parameter", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(getOperationKeyAsyncMock).toHaveBeenCalledTimes(1);
      expect(getOperationKeyAsyncMock).toHaveBeenCalledWith(operationClientUuid);
    });

    it("should call OperationClientInterface.getOperationNameAsync with correct parameter", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(getOperationNameAsyncMock).toHaveBeenCalledTimes(1);
      expect(getOperationNameAsyncMock).toHaveBeenCalledWith(operationClientUuid);
    });

    it("should call LogicalTerminationPoint.getServerLtpListAsync with correct parameter", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(getServerLtpListAsyncMock).toHaveBeenCalledTimes(1);
      expect(getServerLtpListAsyncMock).toHaveBeenCalledWith(operationClientUuid);
    });

    it("should call HttpClientInterface.getApplicationNameAsync with correct parameter", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(getApplicationNameAsyncClientMock).toHaveBeenCalledTimes(1);
      expect(getApplicationNameAsyncClientMock).toHaveBeenCalledWith("http-client-uuid");
    });

    it("should call HttpClientInterface.getReleaseNumberAsync with correct parameter", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(getReleaseNumberAsyncMock).toHaveBeenCalledTimes(1);
      expect(getReleaseNumberAsyncMock).toHaveBeenCalledWith("http-client-uuid");
    });

    it("should call HttpServerInterface.getApplicationNameAsync with correct parameter", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(getApplicationNameAsyncServerMock).toHaveBeenCalledTimes(1);
    });

    it("should call OnfAttributeFormatter.modifyJsonObjectKeysToKebabCase with correct parameter", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(modifyJsonObjectKeysToKebabCaseMock).toHaveBeenCalledTimes(1);
      expect(modifyJsonObjectKeysToKebabCaseMock).toHaveBeenCalledWith(
        expect.any(RequestHeader)
      );
    });

    it("should call RestRequestBuilder.BuildAndTriggerRestRequest with correct parameters", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(buildAndTriggerRestRequestMock).toHaveBeenCalledTimes(1);
      expect(buildAndTriggerRestRequestMock).toHaveBeenCalledWith(
        operationClientUuid,
        httpMethod,
        expect.any(RequestHeader),
        httpRequestBody,
        params
      );
    });

    it("should return response data if response status starts with 2", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };

      const res = await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(res).toEqual({ response: "data" });
    });

    it("should call ExecutionAndTraceService.recordServiceRequestFromClient if response status is 408", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };
      buildAndTriggerRestRequestMock.mockResolvedValue({ status: 408, data: { response: "data" } });

      await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(recordServiceRequestFromClientMock).toHaveBeenCalledTimes(1);
      expect(recordServiceRequestFromClientMock).toHaveBeenCalledWith(
        "server-application-name",
        "server-application-release-number",
        xCorrelator,
        traceIndicator,
        user,
        "originator",
        "operation-name",
        408,
        httpRequestBody,
        { response: "data" }
      );
    });

    it("should throw BadGateway if response status is 408", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };
      buildAndTriggerRestRequestMock.mockResolvedValue(new createHttpError.RequestTimeout());

      // FIXME {} is returned, instead of thrown InternalServerError
      // expect(res).toEqual({});
      await expect(
        eventDispatcher.dispatchEvent(
          operationClientUuid,
          httpRequestBody,
          user,
          xCorrelator,
          traceIndicator,
          customerJourney,
          httpMethod,
          params
        )
      ).rejects.toThrow(new createHttpError.BadGateway());
    });

    it("should return undefined if response status is 404", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };
      buildAndTriggerRestRequestMock.mockResolvedValue(new createHttpError.NotFound());

      const res = await eventDispatcher.dispatchEvent(
        operationClientUuid,
        httpRequestBody,
        user,
        xCorrelator,
        traceIndicator,
        customerJourney,
        httpMethod,
        params
      );

      expect(res).toEqual(undefined);
    });

    it("should throw InternalServerError if response status is 4xx", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };
      buildAndTriggerRestRequestMock.mockResolvedValue(new createHttpError.RequestTimeout());

      // FIXME {} is returned, instead of thrown InternalServerError
      // expect(res).toEqual({});
      await expect(
        eventDispatcher.dispatchEvent(
          operationClientUuid,
          httpRequestBody,
          user,
          xCorrelator,
          traceIndicator,
          customerJourney,
          httpMethod,
          params
        )
      ).rejects.toThrow(new createHttpError.InternalServerError());
    });

    it("should throw BadGateway if response status is 5xx", async () => {
      const operationClientUuid = "operation-client-uuid";
      const httpRequestBody = { request: "body" };
      const user = "user";
      const xCorrelator = "x-correlator";
      const traceIndicator = "trace-indicator";
      const customerJourney = "customer-journey";
      const httpMethod = "GET";
      const params = { path: { param: "value" } };
      buildAndTriggerRestRequestMock.mockResolvedValue(new createHttpError.InternalServerError());

      // FIXME {} is returned, instead of thrown InternalServerError
      // expect(res).toEqual({});
      await expect(
        eventDispatcher.dispatchEvent(
          operationClientUuid,
          httpRequestBody,
          user,
          xCorrelator,
          traceIndicator,
          customerJourney,
          httpMethod,
          params
        )
      ).rejects.toThrow(new createHttpError.BadGateway());
    });
  });
});