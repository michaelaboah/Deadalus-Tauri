import client from "../apollo/apolloClient";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, QueryOptions, MutationOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AmplifierInput = {
  max_sample_rate: SampleRate;
  midi: MidiType;
  network_connectivity: Array<NetworkConnectivty>;
  notes: Array<Scalars['String']>;
  physical_connectivity: Array<PhysicalConnectivty>;
  power: ElectricalInput;
  signalProtocol: Protocol;
  totalInputs: Scalars['Int'];
  totalOutputs: Scalars['Int'];
};

export type AmplifierItem = {
  __typename?: 'AmplifierItem';
  id: Scalars['Int'];
  max_sample_rate: SampleRate;
  midi: MidiType;
  network_connectivity: Array<NetworkPort>;
  notes: Array<Scalars['String']>;
  physical_connectivity: Array<PhysicalPort>;
  power: IElectrical;
  signalProtocol: Protocol;
  totalInputs: Scalars['Int'];
  totalOutputs: Scalars['Int'];
};

/** Common types of Analog or Copper based connections. *Note: Generally more robust than digital counterparts, but lacks flexibility. */
export enum Analog {
  DualPinPhoenix = 'DUAL_PIN_PHOENIX',
  Nl2 = 'NL2',
  Nl4 = 'NL4',
  Nl8 = 'NL8',
  TriPinPhoenix = 'TRI_PIN_PHOENIX',
  /** Tip-Ring-Ring-Sleeve Connection. Commonly used for mobile audio connections. *Note: Sleeve is ground. */
  Trrs = 'TRRS',
  /** Tip-Ring-Sleeve Connection. Commonly used for stereo equipment. *Note: Sleeve is ground. */
  Trs = 'TRS',
  /** Tip-Sleeve Connection. Commonly used for musical instruments. *Note: No ground. */
  Ts = 'TS',
  /** 3 pin XLR connection. Most common single direction analog connection. */
  XlrAnalog = 'XLR_ANALOG',
  /** 3 pin XLR connection. A digital connection that uses AES-3 for carrying 2 complete signals. *Note: Lower ohm rating, may not be compatible with XLR_ANALOG. */
  XlrDigital = 'XLR_DIGITAL'
}

/** Possible category that an Item can be apart of. */
export enum Categories {
  Amplifier = 'AMPLIFIER',
  Computer = 'COMPUTER',
  Console = 'CONSOLE',
  Generic = 'GENERIC',
  Microphones = 'MICROPHONES',
  Monitoring = 'MONITORING',
  Network = 'NETWORK',
  Processor = 'PROCESSOR',
  Radio = 'RADIO',
  Speaker = 'SPEAKER',
  SpkHardware = 'SPK_HARDWARE'
}

export type ComputerInput = {
  dedicated_graphics: Scalars['Boolean'];
  model_year?: InputMaybe<Scalars['String']>;
  network_connectivity: Array<NetworkConnectivty>;
  operating_system?: InputMaybe<Scalars['String']>;
  power: ElectricalInput;
  processor: Scalars['String'];
  ram_size: Scalars['Int'];
  total_storage: Scalars['Int'];
};

/** Representation of any computer based items. */
export type ComputerItem = {
  __typename?: 'ComputerItem';
  cpu_processor: Scalars['String'];
  dedicated_graphics: Scalars['Boolean'];
  id: Scalars['Int'];
  model_year?: Maybe<Scalars['String']>;
  network_connectivity: Array<NetworkPort>;
  operating_system?: Maybe<Scalars['String']>;
  power: IElectrical;
  ram_size: Scalars['Int'];
  total_storage: Scalars['Int'];
};

export type ConsoleInput = {
  auxInputs: Scalars['Int'];
  can_expand: Scalars['Boolean'];
  faders: Scalars['Int'];
  max_sample_rate: SampleRate;
  midi: MidiType;
  model: Scalars['String'];
  motorized: Scalars['Boolean'];
  notes: Array<Scalars['String']>;
  phantomPowerInputs: Scalars['Int'];
  physicalAuxInputs: Scalars['Int'];
  physicalInputs: Scalars['Int'];
  physicalOutputs: Scalars['Int'];
  power: ElectricalInput;
  protocolInputs: Scalars['Int'];
  searchModel?: InputMaybe<Scalars['String']>;
  signalProtocol: Protocol;
  totalBusses: Scalars['Int'];
  totalInputs: Scalars['Int'];
  totalOutputs: Scalars['Int'];
};

export type ConsoleItem = {
  __typename?: 'ConsoleItem';
  auxInputs: Scalars['Int'];
  can_expand: Scalars['Boolean'];
  faders: Scalars['Int'];
  id: Scalars['Int'];
  max_sample_rate: SampleRate;
  midi: MidiType;
  motorized: Scalars['Boolean'];
  phantomPowerInputs: Scalars['Int'];
  physicalAuxInputs: Scalars['Int'];
  physicalInputs: Scalars['Int'];
  physicalOutputs: Scalars['Int'];
  power: IElectrical;
  protocolInputs: Scalars['Int'];
  signalProtocol: Protocol;
  totalBusses: Scalars['Int'];
  totalInputs: Scalars['Int'];
  totalOutputs: Scalars['Int'];
};

/**
 * Dimensions: Used for storing physical dimentions of items for display or calculations.
 *  Ex: Calculating volume for bulk item storage
 */
export type Dimension = {
  __typename?: 'Dimension';
  height: Scalars['Float'];
  length: Scalars['Float'];
  rack_unit?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
};

/** Input for the electrical properties of an Item, only available in select Item type. Ex: ProcessorItem or ConsoleItem */
export type ElectricalInput = {
  /** Electrical connector used as power input. EX: Powercon Blue */
  input_connector: PowerConnector;
  /** Electrical equipment tend to have a voltage range. Ex: 90V-260V. */
  lower_voltage: Scalars['Float'];
  /** Electrical equipment may have a maximum wattage. Ex: 20A. */
  max_wattage: Scalars['Float'];
  /** Electrical connetor for output often daisy chaining. EX: Powercon Grey/White. */
  output_connector?: InputMaybe<PowerConnector>;
  /** Electrical may have redundant power built in. */
  redundant?: InputMaybe<Scalars['Boolean']>;
  /** Electrical equipment tend to have a voltage range. Ex: 90V-260V. */
  upper_voltage: Scalars['Float'];
  /** Electrical equipment must have a wattage. Ex: 15A. *Note: Please convert Volt-Amperes (VA) to wattage (A). */
  wattage: Scalars['Float'];
};

export type Equipment = {
  __typename?: 'Equipment';
  category: Scalars['String'];
  cost?: Maybe<Scalars['Float']>;
  createdAt: Scalars['String'];
  depth?: Maybe<Scalars['Float']>;
  frequencyRange?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  manufacturer: Scalars['String'];
  model: Scalars['String'];
  powerDraw?: Maybe<Scalars['Float']>;
  publicNotes?: Maybe<Scalars['String']>;
  rackUnit?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['String'];
  weight?: Maybe<Scalars['Float']>;
};

export type EquipmentInput = {
  category: Scalars['String'];
  cost?: InputMaybe<Scalars['Float']>;
  depth?: InputMaybe<Scalars['Float']>;
  frequencyRange?: InputMaybe<Scalars['String']>;
  manufacturer: Scalars['String'];
  model: Scalars['String'];
  powerDraw?: InputMaybe<Scalars['Float']>;
  publicNotes?: InputMaybe<Scalars['String']>;
  rackUnit?: InputMaybe<Scalars['Float']>;
  searchModel?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type EquipmentResponse = {
  __typename?: 'EquipmentResponse';
  equipment?: Maybe<Equipment>;
  equipmentItems?: Maybe<Array<Equipment>>;
  errors?: Maybe<Array<FieldError>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

/** Interface for items with potential electrical capabilies. Stored as JSONType. */
export type IElectrical = {
  __typename?: 'IElectrical';
  /** Electrical connector used as power input. EX: Powercon Blue */
  input_connector: PowerConnector;
  /** Electrical equipment tend to have a voltage range. Ex: 90V-260V. */
  lower_voltage: Scalars['Float'];
  /** Electrical equipment may have a maximum wattage. Ex: 20A. */
  max_wattage: Scalars['Float'];
  /** Electrical connetor for output often daisy chaining. EX: Powercon Grey/White. */
  output_connector?: Maybe<PowerConnector>;
  /** Electrical may have redundant power built in. */
  redundant?: Maybe<Scalars['Boolean']>;
  /** Electrical equipment tend to have a voltage range. Ex: 90V-260V. */
  upper_voltage: Scalars['Float'];
  /** Electrical equipment must have a wattage. Ex: 15A. *Note: Please convert Volt-Amperes (VA) to wattage (A). */
  wattage: Scalars['Float'];
};

export type IGeneric = {
  /** Monetary value of item (in $USD). */
  cost?: Maybe<Scalars['Float']>;
  /** Store when item was created. */
  createdAt: Scalars['String'];
  dimensions?: Maybe<Dimension>;
  id: Scalars['Int'];
  /** Global notes for current item. */
  publicNotes?: Maybe<Scalars['String']>;
  /** Store when item was last changed. */
  updatedAt: Scalars['String'];
  /** Storing the wieght of an Item (in lbs) */
  weight?: Maybe<Scalars['Float']>;
};

export type Item = IGeneric & {
  __typename?: 'Item';
  amplifier?: Maybe<AmplifierItem>;
  category: Categories;
  computer?: Maybe<ComputerItem>;
  console?: Maybe<ConsoleItem>;
  /** Monetary value of item (in $USD). */
  cost?: Maybe<Scalars['Float']>;
  /** Store when item was created. */
  createdAt: Scalars['String'];
  dimensions?: Maybe<Dimension>;
  id: Scalars['Int'];
  model: Scalars['String'];
  network_item?: Maybe<NetworkItem>;
  notes?: Maybe<Array<Scalars['String']>>;
  processor?: Maybe<ProcessingItem>;
  /** Global notes for current item. */
  publicNotes?: Maybe<Scalars['String']>;
  /** Store when item was last changed. */
  updatedAt: Scalars['String'];
  /** Storing the wieght of an Item (in lbs) */
  weight?: Maybe<Scalars['Float']>;
};

export type ItemInput = {
  amplifier?: InputMaybe<AmplifierInput>;
  category: Categories;
  computer?: InputMaybe<ComputerInput>;
  console?: InputMaybe<ConsoleInput>;
  cost: Scalars['Float'];
  manufacturer: Scalars['String'];
  model: Scalars['String'];
  processor?: InputMaybe<ProcessorInput>;
  publicNotes: Scalars['String'];
  searchModel?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type ItemInputEdit = {
  amplifier?: InputMaybe<AmplifierInput>;
  category: Categories;
  computer?: InputMaybe<ComputerInput>;
  console?: InputMaybe<ConsoleInput>;
  cost: Scalars['Float'];
  manufacturer: Scalars['String'];
  model: Scalars['String'];
  network_item?: InputMaybe<NetworkInput>;
  notes?: InputMaybe<Array<Scalars['String']>>;
  processor?: InputMaybe<ProcessorInput>;
  publicNotes: Scalars['String'];
  searchModel?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type ItemResponse = {
  __typename?: 'ItemResponse';
  /** Potential list of errors that can be generated from a Query or Mutation */
  errors?: Maybe<Array<FieldError>>;
  /** Potential Item that comes back as result of a successful Query or Mutation. */
  item?: Maybe<Item>;
};

/** Common types of Midi connection interfaces */
export enum MidiType {
  /** Connection type found in most older / analog equipment. *Note: Conversion is likely necessary for newer equipment. */
  Serial = 'SERIAL',
  /** Connection type found in most newer equipment. *Note: Signal may not be as robust as serial. */
  Usb = 'USB'
}

export type Mutation = {
  __typename?: 'Mutation';
  createEquipment?: Maybe<EquipmentResponse>;
  /** Create a new item with optional subfields. */
  createItem?: Maybe<ItemResponse>;
  createPost: Post;
  deleteEquipment: Scalars['Boolean'];
  deleteEquipmentRange: Scalars['String'];
  deletePost: Scalars['Boolean'];
  deletePosts: Scalars['Boolean'];
  loginUser: UserResponse;
  logout: Scalars['Boolean'];
  registerUser: UserResponse;
  updateEquipment?: Maybe<EquipmentResponse>;
  /** Update an Item using the exact model name and edit all of the fields. */
  updateItem: ItemResponse;
};


export type MutationCreateEquipmentArgs = {
  inputOptions: EquipmentInput;
};


export type MutationCreateItemArgs = {
  itemInput: ItemInput;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationDeleteEquipmentArgs = {
  id?: InputMaybe<Scalars['Int']>;
  model: Scalars['String'];
};


export type MutationDeleteEquipmentRangeArgs = {
  ids: Array<Scalars['Int']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePostsArgs = {
  ids: Array<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  inputOptions: UserInput;
};


export type MutationRegisterUserArgs = {
  inputOptions: UserInput;
};


export type MutationUpdateEquipmentArgs = {
  id: Scalars['Int'];
  updateOptions: EquipmentInput;
};


export type MutationUpdateItemArgs = {
  edits: ItemInputEdit;
  model: Scalars['String'];
};

/** Addition of network ports. Various Protocols are handled via the: (Protocol Enummeration) */
export type NetworkConnectivty = {
  power_over_ethernet: Scalars['Boolean'];
  protocol: Protocol;
};

export type NetworkInput = {
  fiber: Scalars['Boolean'];
  network_connectivity: Array<NetworkConnectivty>;
  network_type: NetworkType;
  power: ElectricalInput;
};

/** Network specific items, handling routing, switching and wireless functionality */
export type NetworkItem = {
  __typename?: 'NetworkItem';
  fiber: Scalars['Boolean'];
  id: Scalars['Int'];
  max_speed: Scalars['Int'];
  network_connectivity: Array<NetworkPort>;
  network_type: NetworkType;
  power: IElectrical;
};

/** Represents RJ45 or Ethernet ports for network capable equipment. Each object represents a singular port */
export type NetworkPort = {
  __typename?: 'NetworkPort';
  power_over_ethernet: Scalars['Boolean'];
  protocol: Protocol;
};

/** Assignable types for various types of networking equipment */
export enum NetworkType {
  AccessPoint = 'ACCESS_POINT',
  Injector = 'INJECTOR',
  Modem = 'MODEM',
  NetworkBridge = 'NETWORK_BRIDGE',
  Nic = 'NIC',
  Repeater = 'REPEATER',
  Router = 'ROUTER',
  RouterSwAp = 'ROUTER_SW_AP',
  SwitchManaged = 'SWITCH_MANAGED',
  SwitchUnmanaged = 'SWITCH_UNMANAGED'
}

/** Addition of physical ports. Various Protocols are handled via the: (Analog Enummeration) */
export type PhysicalConnectivty = {
  connector_type: Analog;
  input: Scalars['Boolean'];
  signal_lines: Scalars['Int'];
};

/** Represents Analog for capable equipment. Each object represents a singular port. */
export type PhysicalPort = {
  __typename?: 'PhysicalPort';
  connector_type: Analog;
  input: Scalars['Boolean'];
  signal_lines: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  /** Store when item was created. */
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  /** Store when item was last changed. */
  updatedAt: Scalars['String'];
};

/** Common connector types for power input/output. */
export enum PowerConnector {
  /** Most common general purpose connector to draw electricity from a powersource. Max voltage: 120. Max amperage: 15A */
  Edison = 'EDISON',
  /** Similar to an EDISON plug, but with a higher max amperage. Max voltage: 120. Max amperage: 20A */
  Edison_20A = 'EDISON_20A',
  /** Most common general purpose connector for connecting electrical equipment to a powersource. Max voltage: 250V. Max amperage: 16A */
  Iec = 'IEC',
  /** High voltage locking connector, the 20 stands for 20 Amps. Max voltage: 250V. *Note: Also known as 3-Wire */
  L6_20 = 'L6_20',
  /** High voltage locking connector, the 30 stands for 30 Amps. Max voltage: 250V. *Note: Also known as 3-Wire */
  L6_30 = 'L6_30',
  /** High voltage locking connector, the 50 stands for 50 Amps. Max voltage: 250V. *Note: Also known as 3-Wire */
  L6_50 = 'L6_50',
  /** High voltage locking connector, the 60 stands for 60 Amps. Max voltage: 250V. *Note: Also known as 3-Wire */
  L6_60 = 'L6_60',
  /** Most common general purpose connector for live electrical connections. Designed for rugged applications. Max voltage: 250V. Max amperage: 20A. *Note: CANNOT be disconnected under live load. */
  Powercon_20A = 'POWERCON_20A',
  /** An extremely robust and reliable locking single phase AC appliance cable connector for high current capacity. Max voltage: 250V. Max amperage: 32A. *Note: CANNOT be disconnected under live load. */
  Powercon_32A = 'POWERCON_32A',
  /** Locking connector for outdoor live electrical connections. Designed for rugged applications. Max voltage: 250V. Max amperage: 20A. *Note: CAN be disconnected under live load. */
  PowerconTrue1 = 'POWERCON_TRUE1',
  /** Successor to POWERCON_TRUE1. Designed for rugged, outdoor, live, applications. Max voltage: 250V. Max amperage: 20A. *Note: CAN be disconnected under live load. */
  PowerconTrue1Top = 'POWERCON_TRUE1_TOP'
}

export type ProcessingItem = {
  __typename?: 'ProcessingItem';
  id: Scalars['Int'];
  max_sample_rate: SampleRate;
  midi: MidiType;
  network_connectivity: Array<NetworkPort>;
  physicalInputs: Scalars['Int'];
  physicalOutputs: Scalars['Int'];
  power: IElectrical;
  protocolInputs: Scalars['Int'];
  signalProtocol: Protocol;
  totalInputs: Scalars['Int'];
  totalOutputs: Scalars['Int'];
};

export type ProcessorInput = {
  max_sample_rate: SampleRate;
  midi?: InputMaybe<MidiType>;
  network_connectivity: Array<NetworkConnectivty>;
  physicalInputs: Scalars['Int'];
  physicalOutputs: Scalars['Int'];
  power: ElectricalInput;
  protocolInputs: Scalars['Int'];
  signalProtocol: Protocol;
  totalInputs: Scalars['Int'];
  totalOutputs: Scalars['Int'];
};

/** Network based audio protocols and computer connections. */
export enum Protocol {
  /** Technical standard of audio over IP protocol. Packatizes and distributes audio signals across connected devices with low latency. Compatible with any network switch & DANTE devices. */
  Aes_67 = 'AES_67',
  /** Audio-Video-Bridging. Streams audio & video signals across connected devices with low latency. Compatible with selected network switchs. *Note: Open-Source */
  Avb = 'AVB',
  /** AVB Standardized. Streams audio & video signals across connected devices with low latency. Compatible with selected network switchs. *Note: Managed by AVNU Aliance. */
  AvbMilan = 'AVB_MILAN',
  /** Most common Audio over IP (AoI) & Audio of Ethernet (AoE) protocol. Packatizes and distributes audio signals across connected devices with low latency. Compatible with any network switch. *Note: Proprietary by Audinate */
  Dante = 'DANTE',
  /** Standard IP connection, for LAN or WAN connections. IPv4 is most commonly used for local networks and is the basis for other IP basesd protocols. */
  Ip = 'IP',
  /** Audio over Fiber, networked & P2P systems. Streams audio signals across connected devices with low latency. Compatible with selected Optocore gear. *Note: Proprietary by Optocore. */
  Optocore = 'OPTOCORE',
  /** Audio over Ethernet. Streams 16 audio signals across connected devices with low latency. Compatible with selected gear from Music Tribe child companies. *Note: Proprietary by Music Tribe. */
  Ultranet = 'ULTRANET'
}

export type Query = {
  __typename?: 'Query';
  bye: Scalars['String'];
  findAllItems: Array<Item>;
  /** Using the complete model name find one value. */
  findItem: ItemResponse;
  fullTextSearch: Array<Equipment>;
  fuzzyItemSearch: Array<Item>;
  fuzzyTextSearch: Array<Equipment>;
  getAllEquipment?: Maybe<Array<Equipment>>;
  getEquipment?: Maybe<Equipment>;
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  search: Array<Post>;
  users: Array<User>;
};


export type QueryFindItemArgs = {
  model: Scalars['String'];
};


export type QueryFullTextSearchArgs = {
  fullSearch: Scalars['String'];
};


export type QueryFuzzyItemSearchArgs = {
  model: Scalars['String'];
};


export type QueryFuzzyTextSearchArgs = {
  fuzzySearch: Scalars['String'];
};


export type QueryGetEquipmentArgs = {
  model: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QuerySearchArgs = {
  searchTitle: Scalars['String'];
};

/** Standard sampling rates found within the recording industry */
export enum SampleRate {
  /** High-Definition or 48.0kHz Sample Rate. Used for predominately for professional recording, high quality distrubution and live events. Note: Commonly found in regular Blu-Rays. */
  Hd = 'HD',
  /** Standard-Definition or 44.1kHz Sample Rate. Used for predominately for consumer distrubution. Note: Commonly found in regular CDs. */
  Sd = 'SD',
  /** Ultra-High-Definition or 96.0kHz Sample Rate. Used for predominately for professional recording, high quality distrubution and archival purposes. Note: Commonly found in high-end audio equipment. */
  Uhd = 'UHD'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  accessToken: Scalars['String'];
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type AllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllItemsQuery = { __typename?: 'Query', findAllItems: Array<{ __typename?: 'Item', id: number, createdAt: string, updatedAt: string, cost?: number | null, model: string, weight?: number | null, publicNotes?: string | null, category: Categories, notes?: Array<string> | null, processor?: { __typename?: 'ProcessingItem', id: number, totalInputs: number, totalOutputs: number, physicalInputs: number, physicalOutputs: number, midi: MidiType, protocolInputs: number, signalProtocol: Protocol, max_sample_rate: SampleRate, network_connectivity: Array<{ __typename?: 'NetworkPort', protocol: Protocol, power_over_ethernet: boolean }>, power: { __typename?: 'IElectrical', wattage: number, redundant?: boolean | null, lower_voltage: number, max_wattage: number, input_connector: PowerConnector, output_connector?: PowerConnector | null } } | null, console?: { __typename?: 'ConsoleItem', id: number, totalInputs: number, totalOutputs: number, totalBusses: number, physicalInputs: number, physicalOutputs: number, auxInputs: number, physicalAuxInputs: number, phantomPowerInputs: number, faders: number, motorized: boolean, midi: MidiType, protocolInputs: number, signalProtocol: Protocol, can_expand: boolean, max_sample_rate: SampleRate, power: { __typename?: 'IElectrical', wattage: number, redundant?: boolean | null, lower_voltage: number, max_wattage: number, input_connector: PowerConnector, output_connector?: PowerConnector | null } } | null, dimensions?: { __typename?: 'Dimension', width: number, length: number, height: number, rack_unit?: number | null } | null }> };

export type CreateEquipmentMutationVariables = Exact<{
  inputOptions: EquipmentInput;
}>;


export type CreateEquipmentMutation = { __typename?: 'Mutation', createEquipment?: { __typename?: 'EquipmentResponse', equipment?: { __typename?: 'Equipment', createdAt: string, updatedAt: string, category: string, manufacturer: string, model: string, publicNotes?: string | null, cost?: number | null, powerDraw?: number | null, weight?: number | null, depth?: number | null, rackUnit?: number | null, frequencyRange?: string | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, equipmentItems?: Array<{ __typename?: 'Equipment', id: number, createdAt: string, updatedAt: string, category: string, manufacturer: string, model: string, publicNotes?: string | null, cost?: number | null, powerDraw?: number | null, weight?: number | null, depth?: number | null, rackUnit?: number | null, frequencyRange?: string | null }> | null } | null };

export type EquipmentModelSearchQueryVariables = Exact<{
  fullSearch: Scalars['String'];
}>;


export type EquipmentModelSearchQuery = { __typename?: 'Query', fullTextSearch: Array<{ __typename?: 'Equipment', createdAt: string, updatedAt: string, category: string, manufacturer: string, model: string, publicNotes?: string | null, cost?: number | null, powerDraw?: number | null, weight?: number | null, depth?: number | null, rackUnit?: number | null, frequencyRange?: string | null }> };

export type ConsoleFragFragment = { __typename?: 'ConsoleItem', id: number, totalInputs: number, totalOutputs: number, totalBusses: number, physicalInputs: number, physicalOutputs: number, auxInputs: number, physicalAuxInputs: number, phantomPowerInputs: number, faders: number, motorized: boolean, midi: MidiType, protocolInputs: number, signalProtocol: Protocol, can_expand: boolean, max_sample_rate: SampleRate, power: { __typename?: 'IElectrical', wattage: number, redundant?: boolean | null, lower_voltage: number, max_wattage: number, input_connector: PowerConnector, output_connector?: PowerConnector | null } };

export type GenericFragFragment = { __typename?: 'Item', id: number, createdAt: string, updatedAt: string, cost?: number | null, model: string, weight?: number | null, publicNotes?: string | null, category: Categories, notes?: Array<string> | null, dimensions?: { __typename?: 'Dimension', width: number, length: number, height: number, rack_unit?: number | null } | null };

export type NetworkFragFragment = { __typename?: 'NetworkPort', protocol: Protocol, power_over_ethernet: boolean };

export type PowerFragFragment = { __typename?: 'IElectrical', wattage: number, redundant?: boolean | null, lower_voltage: number, max_wattage: number, input_connector: PowerConnector, output_connector?: PowerConnector | null };

export type ProcessorFragFragment = { __typename?: 'ProcessingItem', id: number, totalInputs: number, totalOutputs: number, physicalInputs: number, physicalOutputs: number, midi: MidiType, protocolInputs: number, signalProtocol: Protocol, max_sample_rate: SampleRate, network_connectivity: Array<{ __typename?: 'NetworkPort', protocol: Protocol, power_over_ethernet: boolean }>, power: { __typename?: 'IElectrical', wattage: number, redundant?: boolean | null, lower_voltage: number, max_wattage: number, input_connector: PowerConnector, output_connector?: PowerConnector | null } };

export type FuzzyTextSearchQueryVariables = Exact<{
  fuzzySearch: Scalars['String'];
}>;


export type FuzzyTextSearchQuery = { __typename?: 'Query', fuzzyTextSearch: Array<{ __typename?: 'Equipment', category: string, manufacturer: string, model: string, cost?: number | null, powerDraw?: number | null, weight?: number | null, depth?: number | null, rackUnit?: number | null, frequencyRange?: string | null }> };

export type GetEquipmentQueryVariables = Exact<{
  model: Scalars['String'];
}>;


export type GetEquipmentQuery = { __typename?: 'Query', getEquipment?: { __typename?: 'Equipment', createdAt: string, updatedAt: string, category: string, manufacturer: string, model: string, publicNotes?: string | null, cost?: number | null, powerDraw?: number | null, weight?: number | null, depth?: number | null, rackUnit?: number | null, frequencyRange?: string | null } | null };

export type GlobalItemSearchQueryVariables = Exact<{
  model: Scalars['String'];
}>;


export type GlobalItemSearchQuery = { __typename?: 'Query', fuzzyItemSearch: Array<{ __typename?: 'Item', id: number, createdAt: string, updatedAt: string, cost?: number | null, model: string, weight?: number | null, publicNotes?: string | null, category: Categories, notes?: Array<string> | null, processor?: { __typename?: 'ProcessingItem', id: number, totalInputs: number, totalOutputs: number, physicalInputs: number, physicalOutputs: number, midi: MidiType, protocolInputs: number, signalProtocol: Protocol, max_sample_rate: SampleRate, network_connectivity: Array<{ __typename?: 'NetworkPort', protocol: Protocol, power_over_ethernet: boolean }>, power: { __typename?: 'IElectrical', wattage: number, redundant?: boolean | null, lower_voltage: number, max_wattage: number, input_connector: PowerConnector, output_connector?: PowerConnector | null } } | null, console?: { __typename?: 'ConsoleItem', id: number, totalInputs: number, totalOutputs: number, totalBusses: number, physicalInputs: number, physicalOutputs: number, auxInputs: number, physicalAuxInputs: number, phantomPowerInputs: number, faders: number, motorized: boolean, midi: MidiType, protocolInputs: number, signalProtocol: Protocol, can_expand: boolean, max_sample_rate: SampleRate, power: { __typename?: 'IElectrical', wattage: number, redundant?: boolean | null, lower_voltage: number, max_wattage: number, input_connector: PowerConnector, output_connector?: PowerConnector | null } } | null, dimensions?: { __typename?: 'Dimension', width: number, length: number, height: number, rack_unit?: number | null } | null }> };

export type LoginUserMutationVariables = Exact<{
  inputOptions: UserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserResponse', accessToken: string, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', createdAt: string, updatedAt: string, id: number, email: string } | null } };

export type UpdateEquipmentMutationVariables = Exact<{
  updateOptions: EquipmentInput;
  updateEquipmentId: Scalars['Int'];
}>;


export type UpdateEquipmentMutation = { __typename?: 'Mutation', updateEquipment?: { __typename?: 'EquipmentResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, equipment?: { __typename?: 'Equipment', id: number, createdAt: string, updatedAt: string, category: string, manufacturer: string, model: string, publicNotes?: string | null, cost?: number | null, powerDraw?: number | null, weight?: number | null, depth?: number | null, rackUnit?: number | null, frequencyRange?: string | null } | null, equipmentItems?: Array<{ __typename?: 'Equipment', id: number, createdAt: string, updatedAt: string, category: string, manufacturer: string, model: string, publicNotes?: string | null, cost?: number | null, powerDraw?: number | null, weight?: number | null, depth?: number | null, rackUnit?: number | null, frequencyRange?: string | null }> | null } | null };

export type ByeQueryVariables = Exact<{ [key: string]: never; }>;


export type ByeQuery = { __typename?: 'Query', bye: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, createdAt: string, updatedAt: string, email: string } | null };

export const PowerFragFragmentDoc = gql`
    fragment PowerFrag on IElectrical {
  wattage
  redundant
  lower_voltage
  max_wattage
  input_connector
  output_connector
}
    `;
export const ConsoleFragFragmentDoc = gql`
    fragment ConsoleFrag on ConsoleItem {
  id
  totalInputs
  totalOutputs
  totalBusses
  physicalInputs
  physicalOutputs
  auxInputs
  physicalAuxInputs
  phantomPowerInputs
  faders
  motorized
  midi
  protocolInputs
  signalProtocol
  can_expand
  max_sample_rate
  power {
    ...PowerFrag
  }
}
    ${PowerFragFragmentDoc}`;
export const GenericFragFragmentDoc = gql`
    fragment GenericFrag on Item {
  id
  createdAt
  updatedAt
  cost
  model
  weight
  publicNotes
  category
  notes
  dimensions {
    width
    length
    height
    rack_unit
  }
}
    `;
export const NetworkFragFragmentDoc = gql`
    fragment NetworkFrag on NetworkPort {
  protocol
  power_over_ethernet
}
    `;
export const ProcessorFragFragmentDoc = gql`
    fragment ProcessorFrag on ProcessingItem {
  id
  totalInputs
  totalOutputs
  physicalInputs
  physicalOutputs
  midi
  protocolInputs
  signalProtocol
  max_sample_rate
  network_connectivity {
    ...NetworkFrag
  }
  power {
    ...PowerFrag
  }
}
    ${NetworkFragFragmentDoc}
${PowerFragFragmentDoc}`;
export const AllItemsDoc = gql`
    query AllItems {
  findAllItems {
    ...GenericFrag
    processor {
      ...ProcessorFrag
    }
    console {
      ...ConsoleFrag
    }
  }
}
    ${GenericFragFragmentDoc}
${ProcessorFragFragmentDoc}
${ConsoleFragFragmentDoc}`;
export const CreateEquipmentDoc = gql`
    mutation CreateEquipment($inputOptions: EquipmentInput!) {
  createEquipment(inputOptions: $inputOptions) {
    equipment {
      createdAt
      updatedAt
      category
      manufacturer
      model
      publicNotes
      cost
      powerDraw
      weight
      depth
      rackUnit
      frequencyRange
    }
    errors {
      field
      message
    }
    equipmentItems {
      id
      createdAt
      updatedAt
      category
      manufacturer
      model
      publicNotes
      cost
      powerDraw
      weight
      depth
      rackUnit
      frequencyRange
    }
  }
}
    `;
export const EquipmentModelSearchDoc = gql`
    query EquipmentModelSearch($fullSearch: String!) {
  fullTextSearch(fullSearch: $fullSearch) {
    createdAt
    updatedAt
    category
    manufacturer
    model
    publicNotes
    cost
    powerDraw
    weight
    depth
    rackUnit
    frequencyRange
  }
}
    `;
export const FuzzyTextSearchDoc = gql`
    query FuzzyTextSearch($fuzzySearch: String!) {
  fuzzyTextSearch(fuzzySearch: $fuzzySearch) {
    category
    manufacturer
    model
    cost
    powerDraw
    weight
    depth
    rackUnit
    frequencyRange
  }
}
    `;
export const GetEquipmentDoc = gql`
    query GetEquipment($model: String!) {
  getEquipment(model: $model) {
    createdAt
    updatedAt
    category
    manufacturer
    model
    publicNotes
    cost
    powerDraw
    weight
    depth
    rackUnit
    frequencyRange
  }
}
    `;
export const GlobalItemSearchDoc = gql`
    query GlobalItemSearch($model: String!) {
  fuzzyItemSearch(model: $model) {
    ...GenericFrag
    processor {
      ...ProcessorFrag
    }
    console {
      ...ConsoleFrag
    }
  }
}
    ${GenericFragFragmentDoc}
${ProcessorFragFragmentDoc}
${ConsoleFragFragmentDoc}`;
export const LoginUserDoc = gql`
    mutation LoginUser($inputOptions: UserInput!) {
  loginUser(inputOptions: $inputOptions) {
    errors {
      field
      message
    }
    user {
      createdAt
      updatedAt
      id
      email
    }
    accessToken
  }
}
    `;
export const UpdateEquipmentDoc = gql`
    mutation UpdateEquipment($updateOptions: EquipmentInput!, $updateEquipmentId: Int!) {
  updateEquipment(updateOptions: $updateOptions, id: $updateEquipmentId) {
    errors {
      field
      message
    }
    equipment {
      id
      createdAt
      updatedAt
      category
      manufacturer
      model
      publicNotes
      cost
      powerDraw
      weight
      depth
      rackUnit
      frequencyRange
    }
    equipmentItems {
      id
      createdAt
      updatedAt
      category
      manufacturer
      model
      publicNotes
      cost
      powerDraw
      weight
      depth
      rackUnit
      frequencyRange
    }
  }
}
    `;
export const ByeDoc = gql`
    query Bye {
  bye
}
    `;
export const MeDoc = gql`
    query Me {
  me: me {
    id
    createdAt
    updatedAt
    email
  }
}
    `;
export const AllItems = (
            options: Omit<
              WatchQueryOptions<AllItemsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<AllItemsQuery> & {
              query: ObservableQuery<
                AllItemsQuery,
                AllItemsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: AllItemsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<AllItemsQuery> & {
                query: ObservableQuery<
                  AllItemsQuery,
                  AllItemsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncAllItems = (
                options: Omit<
                  QueryOptions<AllItemsQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<AllItemsQuery>({query: AllItemsDoc, ...options})
              }
            
export const CreateEquipment = (
            options: Omit<
              MutationOptions<any, CreateEquipmentMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<CreateEquipmentMutation, CreateEquipmentMutationVariables>({
              mutation: CreateEquipmentDoc,
              ...options,
            });
            return m;
          }
export const EquipmentModelSearch = (
            options: Omit<
              WatchQueryOptions<EquipmentModelSearchQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<EquipmentModelSearchQuery> & {
              query: ObservableQuery<
                EquipmentModelSearchQuery,
                EquipmentModelSearchQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: EquipmentModelSearchDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<EquipmentModelSearchQuery> & {
                query: ObservableQuery<
                  EquipmentModelSearchQuery,
                  EquipmentModelSearchQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncEquipmentModelSearch = (
                options: Omit<
                  QueryOptions<EquipmentModelSearchQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<EquipmentModelSearchQuery>({query: EquipmentModelSearchDoc, ...options})
              }
            
export const FuzzyTextSearch = (
            options: Omit<
              WatchQueryOptions<FuzzyTextSearchQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<FuzzyTextSearchQuery> & {
              query: ObservableQuery<
                FuzzyTextSearchQuery,
                FuzzyTextSearchQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: FuzzyTextSearchDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<FuzzyTextSearchQuery> & {
                query: ObservableQuery<
                  FuzzyTextSearchQuery,
                  FuzzyTextSearchQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncFuzzyTextSearch = (
                options: Omit<
                  QueryOptions<FuzzyTextSearchQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<FuzzyTextSearchQuery>({query: FuzzyTextSearchDoc, ...options})
              }
            
export const GetEquipment = (
            options: Omit<
              WatchQueryOptions<GetEquipmentQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetEquipmentQuery> & {
              query: ObservableQuery<
                GetEquipmentQuery,
                GetEquipmentQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetEquipmentDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetEquipmentQuery> & {
                query: ObservableQuery<
                  GetEquipmentQuery,
                  GetEquipmentQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncGetEquipment = (
                options: Omit<
                  QueryOptions<GetEquipmentQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<GetEquipmentQuery>({query: GetEquipmentDoc, ...options})
              }
            
export const GlobalItemSearch = (
            options: Omit<
              WatchQueryOptions<GlobalItemSearchQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GlobalItemSearchQuery> & {
              query: ObservableQuery<
                GlobalItemSearchQuery,
                GlobalItemSearchQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GlobalItemSearchDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GlobalItemSearchQuery> & {
                query: ObservableQuery<
                  GlobalItemSearchQuery,
                  GlobalItemSearchQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncGlobalItemSearch = (
                options: Omit<
                  QueryOptions<GlobalItemSearchQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<GlobalItemSearchQuery>({query: GlobalItemSearchDoc, ...options})
              }
            
export const LoginUser = (
            options: Omit<
              MutationOptions<any, LoginUserMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<LoginUserMutation, LoginUserMutationVariables>({
              mutation: LoginUserDoc,
              ...options,
            });
            return m;
          }
export const UpdateEquipment = (
            options: Omit<
              MutationOptions<any, UpdateEquipmentMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<UpdateEquipmentMutation, UpdateEquipmentMutationVariables>({
              mutation: UpdateEquipmentDoc,
              ...options,
            });
            return m;
          }
export const Bye = (
            options: Omit<
              WatchQueryOptions<ByeQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<ByeQuery> & {
              query: ObservableQuery<
                ByeQuery,
                ByeQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: ByeDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<ByeQuery> & {
                query: ObservableQuery<
                  ByeQuery,
                  ByeQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncBye = (
                options: Omit<
                  QueryOptions<ByeQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<ByeQuery>({query: ByeDoc, ...options})
              }
            
export const Me = (
            options: Omit<
              WatchQueryOptions<MeQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<MeQuery> & {
              query: ObservableQuery<
                MeQuery,
                MeQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: MeDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<MeQuery> & {
                query: ObservableQuery<
                  MeQuery,
                  MeQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
              export const AsyncMe = (
                options: Omit<
                  QueryOptions<MeQueryVariables>,
                  "query"
                >
              ) => {
                return client.query<MeQuery>({query: MeDoc, ...options})
              }
            