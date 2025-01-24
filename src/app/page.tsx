import Image from "next/image";
import { ContractForm } from '@/components/contract-form'

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Contrease</h1>
      <ContractForm />
    </main>
  )
}
