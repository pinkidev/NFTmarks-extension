import { Component } from "solid-js";
import type { Accessor, Setter } from 'solid-js';
import { createSignal } from "solid-js";

interface TooltipProps {
  text: string,
  direction: string,
  setVisible: Setter<boolean>,
}

const Tooltip: Component<TooltipProps> = ({ text, direction }) => {
  const [tooltipPosition, setTooltipPosition] = createSignal({ top: 0, left: 0 });
  
  const calculatePosition = (parentRect: DOMRect, tooltipRect: DOMRect) => {
    const margin = 10;

  switch (direction) {
    case 'left':
      setTooltipPosition({
        top: parentRect.top + parentRect.height / 2 - tooltipRect.height / 2,
        left: parentRect.left - tooltipRect.width - margin
      });
      break;

    case 'right':
      setTooltipPosition({
        top: parentRect.top + parentRect.height / 2 - tooltipRect.height / 2,
        left: parentRect.right + margin
      });
      break;

    case 'top':
      setTooltipPosition({
        top: parentRect.top - tooltipRect.height - margin,
        left: parentRect.left + parentRect.width / 2 - tooltipRect.width / 2
      });
      break;

    case 'bottom':
      setTooltipPosition({
        top: parentRect.bottom + margin,
        left: parentRect.left + parentRect.width / 2 - tooltipRect.width / 2
      });
      break;

    // Add more cases for other directions as needed

    default:
      // Default to 'top' if direction is not recognized
      setTooltipPosition({
        top: parentRect.top - tooltipRect.height - margin,
        left: parentRect.left + parentRect.width / 2 - tooltipRect.width / 2
      });
      break;
  }
  }

  return (
    <div style={{ top: tooltipPosition().top + 'px', left: tooltipPosition().left + 'px' }}
    class='p-2 bg-primaryButtonLight dark:bg-primaryButtonDark text-textLight shadow-md rounded-md absolute'>{text}</div>
  )
};

export default Tooltip;