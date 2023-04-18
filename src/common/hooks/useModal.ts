import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { modalStateSelector, ModalType, updateModalState } from "store/app";

export const useModal = (type: ModalType) => {
  const dispatch = useAppDispatch();
  const isVisible = useSelector(modalStateSelector) == type;
  const setIsVisible = (isVisible: boolean) => {
    const modalState = isVisible ? type : undefined;
    dispatch(updateModalState(modalState));
  };
  return [isVisible, setIsVisible] as const;
};
