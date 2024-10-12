import { MarkerType } from '@vue-flow/core'

export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: '一只健壮的狗' },
    position: { x: 250, y: 0 },
    class: 'light',
  },
  {
    id: '2',
    type: 'output',
    data: { label: '二狗' },
    position: { x: 100, y: 100 },
    class: 'light',
  },
  {
    id: '3',
    data: { label: '狗娃' },
    position: { x: 400, y: 100 },
    class: 'light',
  },
  {
    id: '4',
    data: { label: '狗蛋' },
    position: { x: 400, y: 200 },
    class: 'light',
  },
  {
    id: '5',
    type: 'output',
    data: { label: '狗剩' },
    position: { x: 200, y: 300 },
    class: 'light',
  },
]

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    label: 'edge with arrowhead',
    markerEnd: MarkerType.ArrowClosed,
  },
  {
    id: 'e4-5',
    type: 'step',
    source: '4',
    target: '5',
    label: 'Node 2',
    style: { stroke: 'orange' },
    labelBgStyle: { fill: 'orange' },
  },
  {
    id: 'e3-4',
    type: 'smoothstep',
    source: '3',
    target: '4',
    label: 'smoothstep-edge',
  },
]
