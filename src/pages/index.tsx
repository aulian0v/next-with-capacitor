import { useSession } from "@/modules/auth";

export default function Index() {
  const { data, signIn, signOut } = useSession();

  const buttonProp = data
    ? { children: "SignOut", onClick: signOut }
    : { children: "signIn", onClick: signIn };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button
        className="p-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
        {...buttonProp}
      />
    </div>
  );
}
