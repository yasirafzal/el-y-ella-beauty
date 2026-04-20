module {
  public type BookingId = Nat;
  public type Timestamp = Int;

  public type Service = {
    #haircut;
    #coloring;
    #highlights;
    #blowout;
    #treatment;
    #styling;
    #manicure;
    #pedicure;
    #facial;
    #other : Text;
  };

  public type BookingSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    service : Service;
    preferredDateTime : Text;
    notes : ?Text;
  };

  public type Booking = {
    id : BookingId;
    name : Text;
    phone : Text;
    email : Text;
    service : Service;
    preferredDateTime : Text;
    notes : ?Text;
    submittedAt : Timestamp;
  };

  public type SubmitResult = {
    #ok : BookingId;
    #err : Text;
  };
};
