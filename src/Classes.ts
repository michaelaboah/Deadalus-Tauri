export interface Equipment {
  modelId: number;
  createdAt?: Date;
  updatedAt?: Date;
  category: string;
  manufacturer: string;
  model: string;
  publicNotes?: string;
  cost: number;
  powerDraw?: number;
  weight?: number;
  depth?: number;
  rackUnit?: number;
  frequencyRange?: string;
  items?: Item[];
  quantity?: number;
}

export const buildEquipment = () => ({} as Equipment);

export interface Box {
  id: number;
  name: number;
  length: number;
  width: number;
  height: number;
}

export const buildBox = (currentBox?: Box) => ({ ...currentBox } as Box);

export interface Item {
  itemId: number;
  description: string;
  itemQuantity: number;
  publicNotes?: string;
  privateNotes?: string;
  box?: Box;
}

export const buildItem = (currentItem?: Item): Item =>
  currentItem ? { ...currentItem, itemQuantity: 1 } : ({} as Item);

export type Gear = Equipment & { items: Item[]; gearId: number; quantity: number };

export const buildGear = (currentGear: Gear) => ({ ...currentGear, items: [buildItem()] } as Gear);

export interface ProductionInformation {
  productionName: string;
  designer: string;
  designerPhone: string;
  designerEmail: string;
  associate: [string, boolean];
  assistant: [string, boolean];
  productionSound: [string, boolean];
  asstProdSound: [string, boolean];
  audio2: [string, boolean];
  audio1: [string, boolean];
  showImage: string | undefined;
  designerStamp: string | undefined;
}

export const buildProdInfo = (productionInfo?: ProductionInformation): ProductionInformation =>
  ({ ...productionInfo } as ProductionInformation);

export interface Project {
  productionInformation: ProductionInformation;
  gearList: Gear[];
}

export const createProject = (project?: Project): Project => ({ ...project } as Project);
