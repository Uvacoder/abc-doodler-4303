import { Doodler } from '../doodler'
import { DrawingMode } from '../types'

import { BaseModel } from './base'
import { StylusModel } from './stylus'
import { EllipseModel } from './ellipse'
import { LineModel } from './line'
import { RectModel } from './rect'
import { DrawModel } from './draw'

export function createModels(doodler: Doodler): Record<DrawingMode, BaseModel<SVGElement>> {
  return {
    draw: new DrawModel(doodler),
    stylus: new StylusModel(doodler),
    line: new LineModel(doodler),
    rectangle: new RectModel(doodler),
    ellipse: new EllipseModel(doodler),
  }
}
