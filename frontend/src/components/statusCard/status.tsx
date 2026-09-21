import { useEffect, useState } from "react";
import type { StatusRespons } from "../../type/statusType/account";
import { getStatus } from "../../api/fotballApi/getUserStatus";

export function Status() {
  const [status, setStatus] = useState<StatusRespons | undefined>();

  useEffect(() => {
    async function loadStatus() {
      const result = await getStatus();
      setStatus(result);
    }

    loadStatus();
  }, []);

  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Account Status</h2>

      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-medium text-gray-900">
            {status?.account.firstName} {status?.account.lastName}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Subscription</p>

          <p className="font-medium text-gray-900">
            {status?.subscription.active ? "Active" : "Inactive"}
          </p>
        </div>
      </div>
    </div>
  );
}
