import Lucide from "../../base-components/Lucide";
import { FormCheck } from "../../base-components/Form";
import transactions from "../../fakers/transactions";
import users from "../../fakers/users";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="flex flex-col col-span-12 sm:col-span-10 sm:col-start-2 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium group-[.mode--light]:text-white">
              Billing
            </div>
            <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
              <Button
                variant="primary"
                className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
              >
                <Lucide icon="File" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
                Download Excel
              </Button>
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="flex flex-col p-5 border border-dashed rounded-lg gap-y-8 lg:items-center lg:flex-row bg-slate-50/60">
              <div className="relative flex flex-col gap-5 lg:gap-8">
                <div>
                  <div className="text-xs uppercase text-slate-500">
                    Annual billing for your plan:
                  </div>
                  <div className="mt-1.5 text-lg font-medium">
                    Silver Plus Membership
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase text-slate-500">
                    Total per year
                  </div>
                  <div className="mt-1.5 text-lg font-medium text-primary">
                    $74,264.01 USD
                  </div>
                </div>
              </div>
              <div className="lg:ml-auto">
                <div className="flex flex-col gap-3 md:flex-row">
                  <Button
                    variant="outline-secondary"
                    className="px-4 border-slate-300/80 bg-slate-100/70"
                  >
                    <Lucide
                      icon="ShieldX"
                      className="stroke-[1.3] w-4 h-4 mr-2 -ml-0.5"
                    />{" "}
                    Cancel Subscription
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="px-4 border-primary/50 bg-primary/5"
                  >
                    <Lucide
                      icon="AppWindow"
                      className="stroke-[1.3] w-4 h-4 mr-2 -ml-0.5"
                    />{" "}
                    Update Plan
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="font-medium">Storage usage</div>
              <div className="ml-auto">
                <span className="font-medium">4.27 GB</span>{" "}
                <span className="text-slate-500">used of 6 GB</span>
              </div>
            </div>
            <div className="flex h-2 mt-3.5">
              <div className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[60%]"></div>
              <div className="h-full first:rounded-l last:rounded-r border border-slate-300 bg-slate-100 w-[40%]"></div>
            </div>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-3.5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                <div className="ml-2.5">Frontend Engineer</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="ml-2.5">Backend Engineer</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">My Address</div>
            <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
              <Button variant="primary">
                <Lucide icon="MapPin" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
                Add New Address
              </Button>
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="border border-dashed rounded-[0.6rem] border-slate-300/80">
              {_.take(users.fakeUsers(), 3).map((faker, fakerKey) => (
                <div
                  className="flex items-center px-5 pt-3 pb-4 border-b border-dashed border-slate-300/80 last:border-0 hover:bg-slate-50"
                  key={fakerKey}
                >
                  <FormCheck.Input
                    id="checkbox-switch-3"
                    type="radio"
                    value="billing-1"
                    name="address"
                    checked
                    onChange={() => {}}
                  />
                  <div className="flex flex-col w-full ml-5 sm:items-center sm:flex-row gap-y-3">
                    <label
                      htmlFor="checkbox-switch-3"
                      className="w-full cursor-pointer"
                    >
                      <div className="text-base font-medium">
                        Billing address #{fakerKey + 1}
                      </div>
                      <div className="flex flex-col gap-1 mt-1 text-slate-500">
                        <div className="">{faker.addressLine1}</div>
                        <div className="">{faker.addressLine2}</div>
                        <div className="">{faker.location}</div>
                      </div>
                    </label>
                    <Button
                      variant="outline-secondary"
                      className="pl-3.5 pr-4 sm:ml-auto whitespace-nowrap"
                    >
                      <Lucide
                        icon="PenSquare"
                        className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                      />{" "}
                      Edit Address
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-y-3 flex-col lg:flex-row lg:items-center px-5 py-3.5 mt-5 border rounded-lg bg-slate-50/80 border-slate-200/80">
              <div>
                <div className="text-base font-medium">Tax location</div>
                <div className="text-slate-500 whitespace-nowrap mt-0.5">
                  UK - 20.00% SST
                </div>
                <a href="" className="block mt-1 text-primary">
                  More info
                </a>
              </div>
              <div className="lg:text-right lg:ml-auto">
                <div className="text-slate-500 mt-0.5 leading-relaxed">
                  Your text location determines the taxes that are applied to
                  your bill.
                </div>
                <a href="" className="block mt-0.5 text-primary">
                  How do I correct my tax location?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">Payment Method</div>
            <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
              <Button variant="primary">
                <Lucide
                  icon="AppWindow"
                  className="stroke-[1.3] w-4 h-4 mr-2"
                />{" "}
                Add New Card
              </Button>
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="leading-relaxed text-slate-500">
              Payments will be processed either at the conclusion of the month
              or upon exceeding the designated usage threshold. We accept all
              major credit and debit cards.
            </div>
            <div className="border border-dashed rounded-[0.6rem] border-slate-300/80 mt-5">
              <div className="flex items-center px-5 pt-3 pb-4 border-b border-dashed border-slate-300/80 last:border-0 hover:bg-slate-50">
                <FormCheck.Input
                  id="checkbox-switch-3"
                  type="radio"
                  value="credit-card-1"
                  name="credit-card"
                  checked
                  onChange={() => {}}
                />
                <div className="flex flex-col w-full ml-5 sm:items-center sm:flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="400"
                    height="130"
                    viewBox="0 0 400 130"
                    fill="none"
                    className="w-14 h-14"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M173.4 127.6H140.8L161.2 2.2H193.8L173.4 127.6ZM113.4 2.2L82.2 88.4L78.6 69.8L67.6 13.6C67.6 13.6 66.2 2.4 52.2 2.4H0.6L0 4.4C0 4.4 15.8 7.6 34.2 18.8L62.6 127.8H96.6L148.6 2.4L113.4 2.2ZM370 127.6H400L373.8 2.2H347.6C335.4 2.2 332.6 11.6 332.6 11.6L284 127.6H318L324.8 109H366.2L370 127.6ZM334.2 83.2L351.4 36.2L361 83.2H334.2ZM286.4 32.4L291 5.4C291 5.4 276.6 0 261.6 0C245.4 0 207 7 207 41.6C207 74 252.2 74.4 252.2 91.4C252.2 108.4 211.8 105.4 198.4 94.6L193.6 122.8C193.6 122.8 208.2 129.8 230.4 129.8C252.6 129.8 286.2 118.2 286.2 86.8C286.2 54.2 240.6 51.2 240.6 37C240.6 22.8 272.4 24.6 286.4 32.4Z"
                        fill="#2566AF"
                      />
                      <path
                        d="M78.6 70L67.6 13.6C67.6 13.6 66.2 2.39999 52.2 2.39999H0.6L0 4.39999C0 4.39999 24.8 9.59999 48.4 28.8C71.2 47 78.6 70 78.6 70Z"
                        fill="#E6A540"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="400" height="129.8" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col w-full sm:ml-5 md:flex-row md:items-center gap-y-3">
                    <label
                      htmlFor="checkbox-switch-3"
                      className="w-full cursor-pointer"
                    >
                      <div className="flex flex-col text-base font-medium sm:items-center sm:flex-row gap-y-2">
                        {users.fakeUsers()[0].name}
                        <div className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-1.5 py-px sm:ml-2.5 mr-auto sm:mr-0">
                          <span className="-mt-px">Primary</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 mt-1.5">
                        <div className="">MasterCard •••• 4242</div>
                        <div className="text-slate-500">
                          Checking - Expires 12/22
                        </div>
                      </div>
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row md:ml-auto">
                      <Button
                        variant="outline-secondary"
                        className="pl-3.5 pr-4  whitespace-nowrap"
                      >
                        <Lucide
                          icon="PenSquare"
                          className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                        />{" "}
                        Edit
                      </Button>
                      <Button
                        variant="outline-secondary"
                        className="pl-3.5 pr-4 whitespace-nowrap"
                      >
                        <Lucide
                          icon="Trash"
                          className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                        />{" "}
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-5 pt-3 pb-4 border-b border-dashed border-slate-300/80 last:border-0 hover:bg-slate-50">
                <FormCheck.Input
                  id="checkbox-switch-4"
                  type="radio"
                  value="credit-card-2"
                  name="credit-card"
                  onChange={() => {}}
                />
                <div className="flex flex-col w-full ml-5 sm:items-center sm:flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="400"
                    height="248"
                    viewBox="0 0 400 248"
                    fill="none"
                    className="w-14 h-14"
                  >
                    <g clipPath="url(#clip0)">
                      <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                      <path
                        d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                        fill="#EB001B"
                      />
                      <path
                        d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                        fill="#F79E1B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="400" height="247.2" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col w-full sm:ml-5 md:flex-row md:items-center gap-y-3">
                    <label
                      htmlFor="checkbox-switch-4"
                      className="w-full cursor-pointer"
                    >
                      <div className="flex flex-col text-base font-medium sm:items-center sm:flex-row gap-y-2">
                        {users.fakeUsers()[0].name}
                        <div className="flex items-center text-xs font-medium rounded-md text-danger bg-danger/10 border border-danger/10 px-1.5 py-px sm:ml-2.5 mr-auto sm:mr-0">
                          <span className="-mt-px">Expired</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 mt-1.5">
                        <div className="">Visa •••• 9016</div>
                        <div className="text-slate-500">
                          Debit - Expires 04/20
                        </div>
                      </div>
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row md:ml-auto">
                      <Button
                        variant="outline-secondary"
                        className="pl-3.5 pr-4  whitespace-nowrap"
                      >
                        <Lucide
                          icon="PenSquare"
                          className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                        />{" "}
                        Edit
                      </Button>
                      <Button
                        variant="outline-secondary"
                        className="pl-3.5 pr-4 whitespace-nowrap"
                      >
                        <Lucide
                          icon="Trash"
                          className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                        />{" "}
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">Transaction History</div>
          </div>
          <div className="mt-3.5 box box--stacked">
            <div className="border-b border-dashed border-slate-200/80">
              <div className="overflow-auto xl:overflow-visible">
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Td className="py-4 font-medium bg-slate-50 first:rounded-tl-[0.6rem] last:rounded-tr-[0.6rem] border-slate-200/80 text-slate-500">
                        Transaction ID
                      </Table.Td>
                      <Table.Td className="py-4 font-medium bg-slate-50 first:rounded-tl-[0.6rem] last:rounded-tr-[0.6rem] border-slate-200/80 text-slate-500">
                        Status
                      </Table.Td>
                      <Table.Td className="py-4 font-medium bg-slate-50 first:rounded-tl-[0.6rem] last:rounded-tr-[0.6rem] border-slate-200/80 text-slate-500">
                        Amount
                      </Table.Td>
                      <Table.Td className="py-4 font-medium bg-slate-50 first:rounded-tl-[0.6rem] last:rounded-tr-[0.6rem] border-slate-200/80 text-slate-500">
                        Date
                      </Table.Td>
                      <Table.Td className="py-4 text-center font-medium bg-slate-50 first:rounded-tl-[0.6rem] last:rounded-tr-[0.6rem] border-slate-200/80 text-slate-500">
                        Invoice
                      </Table.Td>
                      <Table.Td className="py-4 text-center font-medium bg-slate-50 first:rounded-tl-[0.6rem] last:rounded-tr-[0.6rem] border-slate-200/80 text-slate-500">
                        Action
                      </Table.Td>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {_.take(transactions.fakeTransactions(), 3).map(
                      (faker, fakerKey) => (
                        <Table.Tr
                          key={fakerKey}
                          className="[&_td]:last:border-b-0"
                        >
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <a
                              href=""
                              className="flex items-center text-primary"
                            >
                              <Lucide
                                icon="ExternalLink"
                                className="w-3.5 h-3.5 stroke-[1.7]"
                              />
                              <div className="ml-1.5 text-[13px] whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                                {faker.orderId}
                              </div>
                            </a>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <div
                              className={clsx([
                                "flex items-center",
                                faker.orderStatus.textColor,
                              ])}
                            >
                              <Lucide
                                icon={faker.orderStatus.icon}
                                className="w-3.5 h-3.5 stroke-[1.7]"
                              />
                              <div className="ml-1.5 whitespace-nowrap">
                                {faker.orderStatus.name}
                              </div>
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <div className="whitespace-nowrap">
                              ${faker.amount}
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <div className="whitespace-nowrap">
                              {faker.orderDate}
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 text-center border-dashed dark:bg-darkmode-600">
                            <Button
                              variant="outline-secondary"
                              className="pl-3.5 pr-4 whitespace-nowrap"
                            >
                              <Lucide
                                icon="File"
                                className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                              />{" "}
                              Download PDF
                            </Button>
                          </Table.Td>
                          <Table.Td className="py-4 text-center border-dashed dark:bg-darkmode-600">
                            <Button
                              variant="outline-secondary"
                              className="pl-3.5 pr-4 whitespace-nowrap"
                            >
                              <Lucide
                                icon="Eye"
                                className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                              />{" "}
                              Quick View
                            </Button>
                          </Table.Td>
                        </Table.Tr>
                      )
                    )}
                  </Table.Tbody>
                </Table>
              </div>
            </div>
            <div className="flex justify-end w-full p-5">
              <Button
                variant="outline-primary"
                className="w-full px-6 bg-white sm:w-auto text-primary border-primary/30 hover:bg-primary/20"
              >
                View all transactions
                <Lucide
                  icon="ArrowRight"
                  className="stroke-[1.3] w-4 h-4 ml-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
