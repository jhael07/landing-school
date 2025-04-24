import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const ArticleOptions = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} />;
};

const SubTitle = ({ text }: { text: string }) => {
  return <h4 className="mb-2 text-gray-500 text-sm">{text}</h4>;
};

const ButtonsContainer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="w-full mx-auto border p-2.5 gap-2 flex flex-col md:flex-row md:items-center gap-x-2 mb-10 rounded-lg bg-white/80
       backdrop-blur-sm "
      {...props}
    />
  );
};

type ButtonProps = {
  isSelected?: boolean;
  name: string;
  key: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ isSelected, name, ...rest }: ButtonProps) => {
  const className = () =>
    `border p-2 px-4 rounded-lg transition-all active:scale-95 font-medium flex items-center gap-x-1.5 ${
      isSelected
        ? "bg-blue-500 hover:bg-blue-600 text-white"
        : "bg-white hover:bg-slate-100 border-gray-400"
    }`;

  return (
    <button className={className()} {...rest}>
      {!isSelected ? (
        <FaAngleRight className="text-sm text-gray-500" />
      ) : (
        <FaAngleDown className="text-sm " />
      )}
      {name}
    </button>
  );
};

const Simple = ({
  subTitle,
  buttons,
  defaultValue,
}: {
  subTitle: string;
  buttons: {
    [x in string]: Omit<ButtonProps, "name">;
  };
  defaultValue: string;
}) => {
  return (
    <ArticleOptions>
      <SubTitle text={subTitle} />
      <ButtonsContainer>
        {Object.entries(buttons).map(([name, props]) => {
          return (
            <Button
              {...props}
              name={name}
              key={props.key}
              isSelected={defaultValue === props.key}
            />
          );
        })}
      </ButtonsContainer>
    </ArticleOptions>
  );
};

ArticleOptions.Subtitle = SubTitle;
ArticleOptions.Subtitle = ButtonsContainer;
ArticleOptions.Subtitle = Button;
ArticleOptions.Simple = Simple;

export default ArticleOptions;
