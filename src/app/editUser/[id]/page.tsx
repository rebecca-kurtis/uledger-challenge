import EditUserForm from "@/components/EditUserForm";

type Props = {
}

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }
    return res.json();

  } catch (error) {
    console.log(error);
  }
}

export default async function EditUser({ params }: any) {
  const { id } = params;
  const { user }: any = await getTopicById(id)
  const { _id, first_name, last_name, title, department, group } = user
  return (
    <EditUserForm
      id={_id}
      firstName={first_name}
      lastName={last_name}
      title={title}
      department={department}
      group={group}
    />
  )
}