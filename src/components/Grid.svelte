<script lang="ts">
  import DataGridXL from '@datagridxl/datagridxl2';
  import { Button } from '@svelteuidev/core';
  import { persist } from '../stores/renderStore';
  import { dark_theme } from './Grid_Utils/style';
  //   export let inputData;
  interface Column {
    title: string;
    source: number;
  }
  export let colHeaders: Column[] = [];

  let grid: { getData: () => any };

  let options = {
    theme: $persist.darkMode ? dark_theme : {},
    topBar: [],
    bottomBar: [],

    // Column Fields
    columns: colHeaders,
    colWidth: 150,
    allowResizeCols: true,
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
