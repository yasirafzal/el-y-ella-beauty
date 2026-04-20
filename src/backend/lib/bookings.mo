import Types "../types/bookings";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public type Booking = Types.Booking;
  public type BookingSubmission = Types.BookingSubmission;
  public type BookingId = Types.BookingId;
  public type SubmitResult = Types.SubmitResult;

  public func submit(
    bookings : List.List<Booking>,
    nextId : Nat,
    submission : BookingSubmission,
    now : Int,
  ) : (Booking, SubmitResult) {
    Runtime.trap("not implemented");
  };

  public func listAll(bookings : List.List<Booking>) : [Booking] {
    Runtime.trap("not implemented");
  };
};
