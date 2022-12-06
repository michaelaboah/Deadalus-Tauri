<script lang="ts">
  import { Box, Button, Center, Group, Title } from '@svelteuidev/core';
  import type { Input } from '../Classes';
  import { ioList } from '../stores/ProjectStore';
  import Grid from '../components/Grid.svelte';

  let inputHeader = [
    { title: 'Channel #: ', field: 'channel', source: 'channel' },
    { title: 'Input Device: ', field: 'input_device', source: 'input_device' },
    { title: 'Source Description: ', field: 'input_description', source: 'input_description' },
    { title: 'Note: ', field: 'note', source: 'note' },
  ];

  let test: Input = { channel: null, input_device: null, input_description: null, note: null };

  let input_grid;
</script>

<Box mb="lg">
  <Center inline="{false}">
    <Title>IO List</Title>
  </Center>
</Box>
<Box>
  <Group grow>
    <Box>
      <!-- <NumberInput bind:value="{thing}" /> -->
      <Button
        on:click="{() => {
          $ioList.input_list = [...$ioList.input_list, { ...test }];
        }}">Add Row</Button
      >
      {#key $ioList.input_list}
        <Grid colHeaders="{inputHeader}" data="{$ioList.input_list}" bind:this="{input_grid}" />
      {/key}
    </Box>
    <Box>
      <!-- <Grid /> -->
    </Box>
  </Group>
</Box>
