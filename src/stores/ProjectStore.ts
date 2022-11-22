import { derived, writable, type Writable } from 'svelte/store';
import { buildGear, buildProdInfo, type Gear, type IO, type ProductionInformation, type Project } from '../Classes';

export const accessToken = writable('');

export const currentFile = writable<string>('');

export const gearList = writable<Gear[]>([buildGear({ gearId: 0 } as Gear)]);

export const ioList = writable<IO>({
  input_list: [
    { channel: null, input_device: null, actor: null, note: null },
    { channel: null, input_device: null, actor: null, note: null },
    { channel: null, input_device: null, actor: null, note: null },
  ],
  output_list: [],
});

export const prodInfo = writable<ProductionInformation>(buildProdInfo());

export const project = derived<[Writable<ProductionInformation>, Writable<Gear[]>, Writable<IO>], Project>(
  [prodInfo, gearList, ioList],
  ([$prodInfo, $gearList, $ioList]) => {
    return { productionInformation: $prodInfo, gearList: $gearList, ioList: $ioList } as Project;
  }
);

export const loadProject = (project: Project) => {
  gearList.set(project.gearList);
  prodInfo.set(project.productionInformation);
  ioList.set(project.ioList);
};
