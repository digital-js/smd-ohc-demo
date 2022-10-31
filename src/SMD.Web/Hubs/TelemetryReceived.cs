using SMD.Web.Models;

namespace SMD.Web.Hubs;

public record TelemetryReceived(Telemetry Payload) 
    : MessageBase(MessageTypes.TelemetryReceived);