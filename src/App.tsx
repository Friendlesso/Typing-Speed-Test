import { DropdownButton } from "./components/DropdownButton/DropdownButton"
import { dificultyItems, timeItems } from "./features/typingTest/data"
function App() {

  return (
    <div className="flex gap-5">
      <DropdownButton
        items={timeItems}
        label={'Time'}
      />
      <DropdownButton
        items={dificultyItems}
        label={'Mode'}
      />
    </div>
  )
}

export default App
