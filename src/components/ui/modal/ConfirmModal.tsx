import { useModal } from "common/hooks/useModal";
import { FC } from "react";

type Props = {
  title: string;
  content: string;
  okCallback?: () => void;
};

export const ConfirmModal: FC<Props> = ({ content, title, okCallback }) => {
  const [isVisible, setIsVisible] = useModal("confirm");

  return (
    <div className={`modal ${isVisible ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{content}</p>
        {
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-warning"
              onClick={() => {
                setIsVisible(false);
                okCallback && okCallback();
              }}
            >
              OK
            </label>
          </div>
        }
      </div>
    </div>
  );
};
