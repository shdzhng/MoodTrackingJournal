import {
  EntryContainer,
  EntryName,
  Entry,
  FeelingBubble,
} from './Journal.style';

export default function SingleEntryCard({ entry }) {
  return (
    <EntryContainer>
      <EntryName variant={entry.feeling}>{entry.name}</EntryName>
      <Entry>{entry.entry}</Entry>
      <FeelingBubble variant={entry.feeling}> </FeelingBubble>
    </EntryContainer>
  );
}
