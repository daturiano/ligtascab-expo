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
  updated_at: Date;
};

export type Tricycle = {
  id: string;
  operator_id: string;
  tricycle_details: {
    model: string;
    year: string;
    seating_capacity: string;
    body_number: string;
    fuel_type: string;
    mileage: string;
    maintenance_status: string;
  };
  compliance_details: {
    registration_number: string;
    franchise_number: string;
    or_number: string;
    cr_number: string;
  };
  status: string;
  plate_number: string;
  registration_expiration: Date;
  franchise_expiration: Date;
  last_maintenance_date: Date;
};

export type ShiftLog = {
  id?: string;
  driver_name: string;
  plate_number: string;
  shift_type: string;
  driver_id: string;
  created_at?: string;
};
