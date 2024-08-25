'use client'
import { add } from '@autospace/sample-lib'
import { useMutation, useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)

  return (
    <main>
      Hello{add(2, 4)}
      <div>
        {data?.companies.map((company) => (
          <div key={company.id}>{company.displayName}</div>
        ))}
      </div>
    </main>
  )
}
