export interface Ticket {
  id: string;
  number: number;
  createdAt: Date;
  handleAtDesk?: string; // que escritorio es
  handleAt?: Date;
  done: boolean;
}
