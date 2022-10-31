using SMD.Web.Models;

namespace SMD.Web.Hubs;

public record VehicleAddedMessage(Vehicle Payload)
    : MessageBase(MessageTypes.VehicleAdded);