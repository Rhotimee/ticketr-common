export enum OrderStatus {
  // when order has been created, but the ticket
  // it is trying to order has not been reserved
  Created = "created",

  // When ticket the order is trying to reserve has already
  // been reserved, or when the user has cancelled the order
  // or if the order expires before payment
  Cancelled = "cancelled",

  // When the order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  // WHen the order has been reserved and paid for.
  Complete = "complete",
}
