import { FunctionComponent, ReactNode } from "react"

export namespace IZSK {
  export type BaseProps = {
    id?: string
    className?: string
    children?: ReactNode
  }

  export type FC<P = {}> = FunctionComponent<P & BaseProps>
  export type Icon = FunctionComponent<React.SVGProps<SVGSVGElement>>
}
