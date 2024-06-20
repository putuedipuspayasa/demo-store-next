export interface BaseModel {
  id: bigint;
  uid: string;
  created_at: Date;
  updated_at: Date;
  created_by?: string;
  updated_by?: string;
}
