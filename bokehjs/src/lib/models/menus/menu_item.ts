import {UIElement, UIElementView} from "../ui/ui_element"
import {StyleSheetLike} from "core/dom"
import * as p from "core/properties"

import menus_css from "styles/menus.css"
import icons_css from "styles/icons.css"

export abstract class MenuItemView extends UIElementView {
  declare model: MenuItem

  override styles(): StyleSheetLike[] {
    return [...super.styles(), menus_css, icons_css]
  }
}

export namespace MenuItem {
  export type Attrs = p.AttrsOf<Props>
  export type Props = UIElement.Props
}

export interface MenuItem extends MenuItem.Attrs {}

export abstract class MenuItem extends UIElement {
  declare properties: MenuItem.Props
  declare __view_type__: MenuItemView

  constructor(attrs?: Partial<MenuItem.Attrs>) {
    super(attrs)
  }
}
