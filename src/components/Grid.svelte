<script>
  //@ts-nocheck
  import DataGridXL from '@datagridxl/datagridxl2';
  import { Button } from '@svelteuidev/core';
  import { persist } from '../stores/renderStore';
  import { ioList } from '../stores/ProjectStore';
  import { dark_theme } from './Grid_Utils/style';
  //   export let inputData;
  // interface Column {
  //   title: string;
  //   source: number;
  // }
  export let colHeaders;
  export let data;

  let grid;

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

  const dgxl = (node) => {
    grid = new DataGridXL(node, options);
  };

  const handleInsert = ({ amount, targetId, insertedIds }) => {
    $ioList.input_list.splice(targetId + 1, 0, { channel: null, input_device: null, actor: null, note: null });
    $ioList.input_list = $ioList.input_list;
  };

  $: if (grid) {
    grid.events.on('insertrows', handleInsert);
  }
</script>

<Button on:click="{() => console.log(grid.getData())}">Get Grid Data</Button>
<!-- <Button on:click="{() => console.log(grid.events.on('insertrows', handleInsert))}" /> -->
<div use:dgxl></div>

<style>
  div {
    height: 70vh;
  }
</style>
