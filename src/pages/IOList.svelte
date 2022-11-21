<script lang="ts">
  import { Box, Center, Group, Title } from '@svelteuidev/core';
  import Grid from '../components/Grid.svelte';

  let inputHeader = [
    { title: 'Channel #: ', source: 0 },
    { title: 'Channel Description: ', source: 1 },
  ];
</script>

<Box>
  <Center inline="{false}">
    <Title>IO List</Title>
  </Center>
  <Group grow>
    <Box>
      <Grid colHeaders="{inputHeader}" />
    </Box>
    <Box>
      <Grid />
    </Box>
  </Group>
</Box>
