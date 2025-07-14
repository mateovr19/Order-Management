'use client'

import React, { useState} from 'react'
import HeadingBlock from '@/components/molecules/HeadingBlock'
import { ArrowDownUp } from 'lucide-react'
import TransitionsTable from '@/components/organisms/TransitionsTable'
import Transitions from '@/components/Templates/Transition/index'

interface Master {
  id: number
  name: string
  balance: number
}

interface Transaction {
  id: number
  date: string
  quantity: number
  name: string
  masterId: number
}

interface Props {
  masters: Master[]
  transitions: Transaction[]
}

export default function TransitionsPageClient({ masters, transitions }: Props) {
  const [selectedMasterId, setSelectedMasterId] = useState<number | null>(null)

  const selectedMaster = masters.find((m) => m.id === selectedMasterId)

  const filteredTransitions = selectedMasterId
    ? transitions.filter((t) => t.masterId === selectedMasterId)
    : transitions

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-row justify-between items-center">
        <HeadingBlock
          title={'Transacciones'}
          description={'Gestiona los movimientos de inventario'}
        />
        <ArrowDownUp size={30} className="text-secondary" />
      </div>

      <div className="flex items-center space-x-4">
        <label htmlFor="master-select" className="text-sm text-gray-700 font-medium">
          Selecciona maestro:
        </label>
        <select
          id="master-select"
          className="border border-gray-300 rounded px-3 py-1"
          onChange={(e) => setSelectedMasterId(Number(e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>Selecciona un maestro</option>
          {masters.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} — ${m.balance}
            </option>
          ))}
        </select>

        {selectedMaster && (
          <Transitions
            masterId={selectedMaster.id}
            productName={selectedMaster.name}
          />
        )}
      </div>

      {selectedMaster && (
        <div className="text-sm text-gray-700">
          <strong>Saldo:</strong> ${selectedMaster.balance}
        </div>
      )}

      <TransitionsTable transitions={filteredTransitions} />
    </div>
  )
}
