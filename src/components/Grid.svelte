<script lang="ts">
  import DataGridXL from '@datagridxl/datagridxl2';
  import { Button } from '@svelteuidev/core';
  //   export let inputData;
  interface Column {
    title: string;
    source: number;
  }
  export let colHeaders: Column[] = [];

  let grid: { getData: () => any };

  let options = {
    topBar: [],
    bottomBar: [],

    // Column Fields
    columns: colHeaders,
    colWidth: 150,
    allowResizeCols: true,

    // columns: [
    //   { title: 'Channel', source: 0 },
    //   { title: 'Symbol', source: 1 },
    //   { title: 'Wattage', source: 2 },
    //   { title: 'Position', source: 3 },
    //   { title: 'Unit Number', source: 4 },
    //   { title: 'Color', source: 5 },
    //   { title: 'UID', source: 6 },
    // ],
  };

  const dgxl = (node: HTMLDivElement) => {
    grid = new DataGridXL(node, options);
  };
</script>

<Button on:click="{() => console.log(grid.getData())}">Get Grid Data</Button>
<div use:dgxl></div>

<style>
  div {
    height: 70vh;
  }
</style>
