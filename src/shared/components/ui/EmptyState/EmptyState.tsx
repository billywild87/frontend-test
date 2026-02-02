import { container, description, title } from "./emptyState.styles";

type EmptyStateProps = {
  title: string;
  description?: string;
};

export function EmptyState({
  title: titleText,
  description: descriptionText,
}: EmptyStateProps) {
  return (
    <div className={container}>
      <h2 className={title}>{titleText}</h2>
      {descriptionText && <p className={description}>{descriptionText}</p>}
    </div>
  );
}
