<script lang="ts">
  import { Box, Button, Center, Group, Title } from '@svelteuidev/core';
  import type { Input } from '../Classes';
  import { ioList } from '../stores/ProjectStore';
  import Grid from '../components/Grid.svelte';

  let inputHeader = [
    { title: 'Channel #: ', source: 'channel' },
    { title: 'Channel Description: ', source: 'input_device' },
    { title: 'Channel Description: ', source: 'actor' },
    { title: 'Channel Description: ', source: 'note' },
  ];

  let test: Input = { channel: null, input_device: null, actor: null, note: null };
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
        <Grid colHeaders="{inputHeader}" data="{$ioList.input_list}" />
      {/key}
    </Box>
    <Box>
      <!-- <Grid /> -->
    </Box>
  </Group>
</Box>
