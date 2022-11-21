<script lang="ts">
  import { Box, Center, Group, NumberInput, Title } from '@svelteuidev/core';
  import Grid from '../components/Grid.svelte';

  let inputHeader = [
    { title: 'Channel #: ', source: 0 },
    { title: 'Channel Description: ', source: 1 },
  ];

  let thing = 64;
</script>

<Box mb="lg">
  <Center inline="{false}">
    <Title>IO List</Title>
  </Center>
</Box>
<Box>
  <Group grow>
    <Box>
      <NumberInput bind:value="{thing}" />
      {#key thing}
        <Grid colHeaders="{inputHeader}" bind:rows="{thing}" />
      {/key}
    </Box>
    <Box>
      <Grid />
    </Box>
  </Group>
</Box>
