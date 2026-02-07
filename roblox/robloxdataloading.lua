--datastore loading

local function load(key)
	local success=false
	local dataReturn=false
	local attempt=0
	repeat
		success,dataReturn=xpcall(function()
			return data:GetAsync(key.UserId)
		end,function()
			attempt+=1
			if attempt==5 then
				ServerStorage.Events.KickPlayer:Fire(key,"dataError")
				warn(dataReturn)
			end
		end)
		task.wait(3)
	until success or attempt==5
	return dataReturn
end