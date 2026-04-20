import Types "../types/bookings";
import BookingsLib "../lib/bookings";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (bookings : List.List<Types.Booking>) {
  var nextBookingId : Nat = 0;

  public func submitBooking(submission : Types.BookingSubmission) : async Types.SubmitResult {
    Runtime.trap("not implemented");
  };

  public query func listBookings() : async [Types.Booking] {
    Runtime.trap("not implemented");
  };
};
