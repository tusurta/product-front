import { FC } from "react";

type Props = {
  title: string;
  content: string;
  open: boolean;
  okCallback?: () => void;
};

export const ConfirmModal: FC<Props> = ({ content, open, title, okCallback }) => {
  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{content}</p>
        {okCallback && (
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={() => okCallback()}>
              OK
            </label>
          </div>
        )}
      </div>
    </div>
  );
};
