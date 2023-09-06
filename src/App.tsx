import { createSignal } from 'solid-js'
import { Stack } from './layout/Stack'
import { ScrollArea } from './layout/ScrollArea'
import { AutoGrid } from './layout/AutoGrid'
import { Grid } from './layout/Grid'
import { ReelGrid } from './layout/Reel'
import { Center, DualPanel } from './layout'
import { Cluster } from './layout/Cluster'

function App() {
  const [hideScrollbar, setHideScrollbar] = createSignal(false);
  const [gridColumns, setGridColumns] = createSignal(3);
  const [gridRows, setGridRows] = createSignal(2);

  return (
    <Stack>
      <div>
        <Center>
    <h1>Layout-Komponenten-Demo</h1>
    </Center>
    </div>
    <div>
    <Stack gap="1rem" direction='column'>
      <div>
         <button onClick={() => setHideScrollbar(!hideScrollbar())}>
        Scrollbar umschalten
      </button>
      </div>
      <div>

      <button onClick={() => setGridColumns(c => c === 3 ? 4 : 3)}>
        Grid-Spalten umschalten
      </button>
      </div>
    <div>
      <button onClick={() => setGridRows(r => r === 2 ? 3 : 2)}>
        Grid-Zeilen umschalten
      </button>
      </div>
    </Stack>
    </div>
    


    <div>

      <AutoGrid columns={gridColumns()}  gap="1rem">
        <div> AUTO Grid Item 1</div>
        <div> AUTOGrid Item 2</div>
        <div> AUTO Grid Item 3</div>
        <div> AUTO Grid Item 4</div>
        <div> AUTOGrid Item 5</div>
        <div> AUTOGrid Item 6</div>
      </AutoGrid>
      </div>
    <div>
      <Grid columns={"3"} gap="1rem">
        <div>Grid Item 1</div>
        <div>Grid Item 2</div>
        <div>Grid Item 3</div>
        <div>Grid Item 4</div>
        <div>Grid Item 5</div>
        <div>Grid Item 6</div>
      </Grid>
      </div>
    <div>
      <ReelGrid gap="1rem">
        <div>Reel Item 1</div>
        <div>Reel Item 2</div>
        <div>Reel Item 3</div>
        <div>Reel Item 4</div>
        <div>Reel Item 5</div>
        <div>Reel Item 6</div>
      </ReelGrid>
      </div>
      <div>
      <ScrollArea hideScrollbar={hideScrollbar()}>
        <DualPanel>
          <div>Left Panel</div>
          <div>Right Panel</div>
        </DualPanel>
      </ScrollArea>
      </div>
      <div>
      <Cluster gap="1rem">
        <div>Cluster Item 1</div>
        <div>Cluster Item 2</div>
        <div>Cluster Item 3</div>
        <div>Cluster Item 4</div>
        <div>Cluster Item 5</div>
        <div>Cluster Item 6</div>
      </Cluster>
      </div>
  
</Stack>
)
}

export default App