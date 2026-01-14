import data from '../data/textData.json';

export type Text = {
  id: string;
  text: string;
}

export type DifficultyProps = {
  difficulty: 'Eazy' | 'Medium' | 'Hard'
}


export function getRandomText(difficulty: keyof typeof data):Text {
  const items = data[difficulty];
  const index = Math.floor(Math.random() * items.length);
  return items[index]
}