export type Driver = {
  id: string;
  operator_id: string;
  first_name: string;
  last_name: string;
  emergency_contact_number: string;
  emergency_contact_name: string;
  phone_number: string;
  license_number: string;
  license_expiration: Date;
  status?: string;
  email?: string;
  image?: string;
  address: string;
  birth_date: Date;
};
