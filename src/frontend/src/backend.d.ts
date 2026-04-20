import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BookingSubmission {
    service: Service;
    name: string;
    email: string;
    preferredDateTime: string;
    notes?: string;
    phone: string;
}
export type SubmitResult = {
    __kind__: "ok";
    ok: BookingId;
} | {
    __kind__: "err";
    err: string;
};
export type Timestamp = bigint;
export type Service = {
    __kind__: "styling";
    styling: null;
} | {
    __kind__: "pedicure";
    pedicure: null;
} | {
    __kind__: "other";
    other: string;
} | {
    __kind__: "treatment";
    treatment: null;
} | {
    __kind__: "blowout";
    blowout: null;
} | {
    __kind__: "haircut";
    haircut: null;
} | {
    __kind__: "highlights";
    highlights: null;
} | {
    __kind__: "coloring";
    coloring: null;
} | {
    __kind__: "manicure";
    manicure: null;
} | {
    __kind__: "facial";
    facial: null;
};
export type BookingId = bigint;
export interface Booking {
    id: BookingId;
    service: Service;
    name: string;
    submittedAt: Timestamp;
    email: string;
    preferredDateTime: string;
    notes?: string;
    phone: string;
}
export interface backendInterface {
    listBookings(): Promise<Array<Booking>>;
    submitBooking(submission: BookingSubmission): Promise<SubmitResult>;
}
