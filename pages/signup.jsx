export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/?auth=signup',
      permanent: false,
    },
  }
}

export default function SignupRedirect() {
  return null
}
