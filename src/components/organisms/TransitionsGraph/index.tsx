import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Transaction {
    date: string
    type: string
    quantity: number
}
  
interface Props {
    transitions: Transaction[]
    saldo: number
}

export default function SaldoChart({ transitions, saldo }: Props) {
    const groupedByDay: Record<string, { entrada: number; salida: number; saldo: number }> = {}

    const sorted = [...transitions].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    
    let acumulado = saldo
    
    sorted.forEach((t) => {
      const fecha = t.date.slice(0, 10)
      const cantidad = t.quantity
    
      if (!groupedByDay[fecha]) {
        groupedByDay[fecha] = { entrada: 0, salida: 0, saldo: 0 }
      }
    
      if (t.type === 'Entrada') {
        groupedByDay[fecha].entrada += cantidad
        acumulado += cantidad
      } else {
        groupedByDay[fecha].salida += cantidad
        acumulado -= cantidad
      }
    
      groupedByDay[fecha].saldo = acumulado
    })
    
    const data = Object.entries(groupedByDay).map(([fecha, valores]) => ({
      fecha,
      entrada: valores.entrada,
      salida: valores.salida,
      saldo: valores.saldo,
    }))
      return (
        <div>
    {transitions.length > 0 ? (
        <div className="card flex flex-col items-stretch gap-4">
            <h5>
             <strong>Saldo final:</strong> {acumulado}
            </h5>
          <h3>Gráfico de transacciones</h3>
          <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="fecha" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="entrada" stroke="#16a34a" strokeWidth={2} name="Entradas" />
                    <Line type="monotone" dataKey="salida" stroke="#dc2626" strokeWidth={2} name="Salidas" />
                    <Line type="monotone" dataKey="saldo" stroke="#2563eb" strokeWidth={2} name="Saldo acumulado" />
                </LineChart>
            </ResponsiveContainer>

        </div>  ) : (
    <div>
    </div>
  )}
  </div>
      )
}
