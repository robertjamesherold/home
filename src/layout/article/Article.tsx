type ArticleProps = {
  children: React.ReactNode;
  className?: string;
}

 const Article:React.FC<ArticleProps> = ({children, className}) => {
  return (
    <article className={className}>
      {children}
    </article>
  );
} 

export default Article;