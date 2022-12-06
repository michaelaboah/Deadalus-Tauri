<script lang="ts">
  //@ts-expect-error
  import DataGridXL from '@datagridxl/datagridxl2';
  import { Button } from '@svelteuidev/core';
  import { persist } from '../stores/renderStore';
  import { ioList } from '../stores/ProjectStore';
  import { dark_theme } from './Grid_Utils/style';

  export let colHeaders;
  export let data;

  let grid: any;

  let options = {
    theme: $persist.darkMode ? dark_theme : {},
    topBar: [],
    bottomBar: [],
    // Column Fields
    columns: colHeaders,
    colWidth: 150,
    allowResizeCols: true,
    data,
  };

  const dgxl = (node: HTMLDivElement) => {
    grid = new DataGridXL(node, options);
  };

  const handleInsert = ({ targetId }: any) => {
    $ioList.input_list.splice(targetId + 1, 0, {
      channel: null,
      input_device: null,
      input_description: null,
      note: null,
    });
    $ioList.input_list = $ioList.input_list;
  };

  const handleCellChange = () => {
    // console.log(grid.getData());
    $ioList.input_list = [...grid.getData()];
    console.log($ioList.input_list);
  };

  $: if (grid) {
    grid.events.on('insertrows', handleInsert);
    grid.events.on('setcellvalues', handleCellChange);
  }
</script>

<Button on:click="{() => console.log(grid.getData())}">Get Grid Data</Button>
<!-- <Button on:click="{() => grid_events}" /> -->
<div use:dgxl></div>

<style>
  div {
    height: 70vh;
  }
</style>
