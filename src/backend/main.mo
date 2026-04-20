import Types "types/bookings";
import BookingsMixin "mixins/bookings-api";
import List "mo:core/List";

actor {
  let bookings = List.empty<Types.Booking>();

  include BookingsMixin(bookings);
};
