import { TModalProps } from './types'
import CloseButton from './CloseButton'

const Modal = ({ children }: TModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-50 dark:bg-blue-950 text-blue-950 dark:text-gray-50 rounded-lg p-4 w-full max-w-lg max-h-[90vh] sm:max-h-[95vh] md:max-w-4xl md:p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Photo Detail</h2>
          <CloseButton />
        </div>

        <div className="overflow-auto max-h-[80vh]">{children}</div>
      </div>
    </div>
  )
}

export default Modal
