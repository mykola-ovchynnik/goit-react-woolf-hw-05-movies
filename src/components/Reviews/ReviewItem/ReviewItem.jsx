import { ReviewItemWrapper } from './ReviewItem.styled';

export const ReviewItem = ({ author, content }) => {
  return (
    <ReviewItemWrapper>
      <h2>Author: {author}</h2>
      <p>{content}</p>
    </ReviewItemWrapper>
  );
};
